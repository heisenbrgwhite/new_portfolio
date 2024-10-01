echo "==================================================="
echo "Start Shell >>> dependency_cruiser/list-dependencies.sh"
filename=$(basename "$1")
output="dependency_cruiser/$filename.mmd"
node_modules/.bin/depcruise src --include-only '^src/components/' --progress --reaches $1 --output-type json --output-to $output
echo "result: $output"
echo "End Shell >>> Success"
echo "==================================================="
