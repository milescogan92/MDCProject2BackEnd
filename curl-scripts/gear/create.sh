
API="http://localhost:4741"
URL_PATH="/gear"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "gear": {
      "rod": "'"${ROD}"'",
      "reel": "'"${REEL}"'",
      "tackle": "'"${TACKLE}"'"
    }
  }'

echo
