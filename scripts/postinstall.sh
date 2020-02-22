#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR/.."
IOS_DIR="$PROJECT_DIR/ios"

cd "$PROJECT_DIR/ios"
pod install
cd -