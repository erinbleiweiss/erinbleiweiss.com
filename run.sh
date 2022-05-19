#!/bin/bash

cd jsonresume-theme-erin && npx gulp; cd .. && resume export "index.html" --format html -t ./jsonresume-theme-erin && node app.js
