# massive-js

[Read docs](https://massive-js.readthedocs.io/en/latest/)

## Step 1

Clone the repo (do not fork it).

## Step 2: Install the NPM modules

```
npm install
```

## Step 3: Install massive-js

```
npm install --save massive
```

## Step 4: Test it

Start your application by running:

```
node server.js
```

## Step 5: Start Postgres

Start your Postgres server.

## Step 6: Bootstrap Your Database

Begin by launching psql:

```
psql
```

Create your database, then exit:

```sql
create database massive_demo;
\q
```

Before finishing, let's inspect the file that will generate our schema and dummy data: `schema.sql` (see Keynote model).

Finally, bootstrap your database from the `./massive-demo` directory with this command:

```
psql massive_demo < schema.sql
```

Test it by going back into psql, and querying injuries:

```
psql
\connect massive_demo
select * from injuries;
```

## Step 7: Connect to Postgres via massive-js

In `server.js` [add code to connect](https://massive-js.readthedocs.io/en/latest/) to your database:

Use `console.log` to test that you're properly connected to Postgres. Remove it when you're confident it works.

## Step 9: Create a SQL Repository

massive-js works by converting your SQL queries, held in files, into JS functions.

For example, the following file, held in the `./db` directory of your project:

`db/get_all_injuries.sql`
```sql
SELECT * FROM injuries;
```

Yields the following function:

```js
db.get_all_injuries(function(err, injuries) {
  console.log(injuries) // injuries will contain an array of injuries
});
```

Create the `./db` directory, and add a file, `get_all_incidents.sql` (incidents, not injuries).

## Step 8: Query Incidents

Now that you have a repository for SQL queries, add a query to your new file that shows you retrieves the following pieces of information for every incident in your database:

* `incidents.id`
* `incidents.us_state`
* `injuries.name`
* `affected_areas.name`
* `causes.name`

Your query will require more than one join in a single statement (whoa!). When you're query is ready, test it in psql:

```
psql massive_demo < db/get_all_incidents.sql
```

## Step 9: Upgrade the GET Endpoint

Now that you have a way to return basic information about incidents of injuries, upgrade the GET endpoint such that an HTTP request can return the information to a client (like Angular) in your response:

Hint:

```js
db.get_all_injuries(function(err, injuries) {
  console.log(injuries) // injuries will contain an array of injuries
});
```

## Step 10: Up the Ante

If you've made it this far, great work. Now, upgrade your endpoint again, this time accepting two new query parameters, `by=cause` and `cause=Sneezing` (e.g. any cause). When `by=cause` is submitted as part of the same GET request, return the results of a _different_ query, `db/get_incidents_by_cause.sql`.

Your query should return the same information, but only results that match the value in the `cause` query param.

Hint:

massive-js accepts arguments as part of your SQL using $1, $2, ...

```sql
select * from products
where in_stock = $1 and price < $2;
```

Your arguments can be submitted as an array as the first argument in the function, before the callback.

```js
db.products_in_stock([true, 1000], function(err, products) {
  // products is a results array
});
```

## Step 11 (Optional): Up the Ante (Again)

Upgrade your GET request to accept not only `by=cause`, but `by=affected_area`, without breaking your previous functionality.

## Step 12: Create a New Incident

Upgrade the POST request to give yourself the ability to create a new incident. Here's a sample request body for Postman:

```json
{
  "us_state": "WV",
  "injury_id": 1,
  "cause_id": 5
}
```

[FOLLOW UP NOTE](https://massive-js.readthedocs.io/en/latest/quick_start/)
