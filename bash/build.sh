#!/usr/bin/env bash
    echo '=======正在打包========='
    cd src/
    rm -rf ../dist/
    fis3 release production -d ../dist/
    cd ../
    echo '=======打包完成========='
