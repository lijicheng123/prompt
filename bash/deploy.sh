#!/usr/bin/env bash
    cd src/
    fis3 release production -d ../dist/
    cd ../
    git add .
    git commit -m 'pull前脚本自动提交'
    git pull origin master
    cd src/
    fis3 release production -d ../dist/
    cd ../
    git add .
    git commit -m '生成后提交'
    git push origin master
