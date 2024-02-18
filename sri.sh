#!/usr/bin/env bash

set -euo pipefail

trap "echo -e '\e[1;31mScript failed: see failed command above\e[0m'" ERR

err() {
  echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $*" >&2
}

USERSCRIPT="dist/chatgpt-model-switcher.user.js"

if [[ ! -f "$USERSCRIPT" ]]; then
    err "File does not exist: $USERSCRIPT"
    exit 1
fi

# Extract all @require URLs from the file
mapfile -t REQUIRE_URLS < <(grep '@require' "$USERSCRIPT" | grep -o 'https\?://[^"]*')

# Check if any URLs were found
if [[ ${#REQUIRE_URLS[@]} -eq 0 ]]; then
    err "No @require URLs found."
    exit 1
fi

for URL in "${REQUIRE_URLS[@]}"; do
    TMP_FILE=$(mktemp)
    if ! curl -s "$URL" -o "$TMP_FILE"; then
        err "Download failed: $URL"
        rm -f "$TMP_FILE"
        exit 1
    fi

    # Clean the URL of any existing SRI hash
    CLEAN_URL="${URL%%#*}"

    # Generate the SRI hash and append it to the cleaned URL
    SRI_HASH=$(openssl dgst -sha256 -binary <"$TMP_FILE" | openssl base64 -A)
    URL_WITH_SRI="$CLEAN_URL#sha256-$SRI_HASH"
    sed -i "s|$(printf '%s' "$URL" | sed 's|[&/]|\\&|g')|$(printf '%s' "$URL_WITH_SRI" | sed 's|[&]|\\&|g')|g" "$USERSCRIPT"

    rm -f "$TMP_FILE"
done

echo "Added Subresource Integrity (SRI) support to $USERSCRIPT"
