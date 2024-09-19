#!/usr/bin/fish

# Curl the files FIRST! xargs -n 1 curl -O < urls.txt (you may need to pass along custom headers, copy as curl from the network tab is you friend here)

for file in (cat paths.txt)
    set folder_path (dirname "$file")
    set file_name (basename "$file")
    echo "Moving $file_name to $folder_path/$file_name"
    mkdir -p "$folder_path/"
    mv "$file_name" "$folder_path/"
end
