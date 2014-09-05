r.js -o public-dev/build/app.build.js
cd public-dist
mv js/vendor/require.js require.js
rm -rf build build.txt js/app js/vendor js/frontend_app.js js/text.js
rm -rf sass
mkdir js/vendor && mv require.js js/vendor
