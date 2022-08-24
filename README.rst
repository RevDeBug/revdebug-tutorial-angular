Simple Angular example, after running select a hero and click the "CRASH" button to crash.

\* Note: Before compiling you may need to change the "host" and "port" fields in "revdebug.json" or specify different values on the command line if you are not running the record server locally.

Assuming instructions were followed from the main "revdebug" Javascript git README and RevDeBug is avaliable either globally::

    npm install
    npm link @revdebug/revdebug
    npx revd

Or installing as a local package::

    npm install
    npm install @revdebug/revdebug
    npx revd

Then::

    npm start
