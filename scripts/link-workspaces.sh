cd packages

for dir in $(ls -d */); do
    cd "$dir"
    npm link
    cd ..
done

for dir in generator ui; do
    cd "$dir"
    npm link apdf-mei-common
    npm link apdf-mei-schemas
    cd ..
done
