Simple Angular example, after running select a hero and click the "CRASH" button to crash or "CRASH FETCH" to crash with recording in the apm.

\* Note: Before compiling you may need to change the "host" and "port" fields in "revdebug.json" or specify different values on the command line if you are not running the record server locally.

Assuming instructions were followed from the official revdebug.com documentation and RevDeBug is avaliable either globally::

    npm config set @revdebug:registry https://nexus.revdebug.com/repository/npm/
    npm install
    npm link @revdebug/revdebug
    npx revd

Or installing as a local package::

    npm config set @revdebug:registry https://nexus.revdebug.com/repository/npm/
    npm install
    npm install @revdebug/revdebug
    npx revd

Then::

    npm start
