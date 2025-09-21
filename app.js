// ---------- Question Banks (Easy & Advanced) ----------
// Easy: fundamentals, syntax, simple definitions
const EASY_BANK = [
    { q: "SQL is a standard language for ?", options: ["Designing websites", "accessing and manipulating databases", "Making operating systems", "Network routing"], answer: 1, explanation: "SQL is used for accessing and manipulating databases in relational database systems." },
    { q: "Which SQL statement is used to select all records from a table named 'Customers'?", options: ["SELECT * FROM Customers;", "SELECT ALL FROM Customers;", "SHOW Customers;", "GET * FROM Customers;"], answer: 0, explanation: "Use SELECT * FROM Customers; to return all columns and rows." },
    { q: "SQL stands for ?", options: ["Structured Query Language", "Sequential Query Language", "Standard Question Language", "Server Query Language"], answer: 0, explanation: "SQL = Structured Query Language." },
    { q: "SQL became a standard of the American National Standards Institute (ANSI) in ?", options: ["1979", "1986", "1999", "2005"], answer: 1, explanation: "ANSI standardized SQL in 1986; ISO followed in 1987." },
    { q: "RDBMS is the basis for SQL and RDBMS stands for ?", options: ["Relational Database Management System", "Remote Data Backup Management Suite", "Rapid Database Modeling System", "Relational Data Business Management Service"], answer: 0, explanation: "RDBMS = Relational Database Management System." },
    { q: "What are SQL Statements ?", options: ["System drivers", "Commands that tell the database what to do", "Spreadsheet formulas", "Network protocols"], answer: 1, explanation: "Examples: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, etc." },
    { q: "What is the use of SELECT statement ?", options: ["Insert data", "Retrieve data", "Delete data", "Grant rights"], answer: 1, explanation: "SELECT retrieves rows/columns from tables or views." },
    { q: "Correct Syntax of SELECT statement ?", options: ["PICK columns FROM table;", "SELECT column1, column2 FROM table_name;", "GET columns table;", "SHOW columns IN table;"], answer: 1, explanation: "General form: SELECT col1, col2 FROM table;" },
    { q: "What is the use of WHERE clause ?", options: ["Sort rows", "Filter rows based on a condition", "Group rows", "Rename columns"], answer: 1, explanation: "WHERE restricts which rows are returned/affected." },
    { q: "Correct Syntax of WHERE clause ?", options: ["SELECT * WHERE table_name condition;", "SELECT * FROM table_name WHERE condition;", "WHERE FROM table_name condition;", "TABLE WHERE SELECT condition;"], answer: 1, explanation: "SELECT ... FROM table WHERE <predicate>;" },
    { q: "What is the use of Operators in SQL ?", options: ["Define hardware", "Form conditions and expressions (e.g., =, <, >, AND, OR, LIKE)", "Manage users", "Start services"], answer: 1, explanation: "Operators are used in comparisons and boolean logic within queries." },
    { q: "Syntax of LIKE Operator ?", options: ["LIKE pattern column", "column LIKE pattern", "LIKE(column:pattern)", "pattern LIKE column"], answer: 1, explanation: "Example: CustomerName LIKE 'A%' or City LIKE 'L_nd__'." },
    { q: "Syntax of BETWEEN Operator ?", options: ["BETWEEN low high column", "column BETWEEN low AND high", "column BETWEEN (low, high)", "BETWEEN(column, low, high)"], answer: 1, explanation: "BETWEEN is inclusive of both bounds." },
    { q: "Syntax of IN Operator ?", options: ["IN column (v1,v2)", "column IN (v1, v2, ...) ", "column IN v1, v2", "IN (v1,v2) column"], answer: 1, explanation: "IN tests membership in a list of values." },
    { q: "What is the purpose of the SQL WHERE clause ?", options: ["To filter rows that meet a condition", "To sort results", "To aggregate values", "To change column names"], answer: 0, explanation: "WHERE filters rows before any grouping." },
    { q: "Which of the following SQL statements would return a list of all unique countries from a table named 'Customers' ?", options: ["SELECT DISTINCT Country FROM Customers;", "SELECT Country FROM Customers;", "SELECT UNIQUE Country FROM Customers;", "SELECT Country FROM Customers ORDER BY Country;"], answer: 0, explanation: "DISTINCT removes duplicate rows." },
    { q: "What is the use of ORDER BY Keyword ?", options: ["Filter rows", "Sort the result set", "Join tables", "Delete rows"], answer: 1, explanation: "ORDER BY sorts ascending by default." },
    { q: "Syntax of ORDER BY Keyword ?", options: ["ORDER BY table column;", "SELECT ... FROM ... ORDER BY column [ASC|DESC];", "SELECT ORDER BY column;", "ORDER ... BY ...;"], answer: 1, explanation: "Place ORDER BY at the end of the SELECT." },
    { q: "What is ASC used for ?", options: ["Descending sort", "Ascending sort", "Average values", "Add columns"], answer: 1, explanation: "ASC sorts A→Z / 0→9." },
    { q: "What is DESC used for ?", options: ["Descending sort", "Ascending sort", "Describe a table", "Delete a table"], answer: 0, explanation: "DESC sorts Z→A / 9→0." },
    { q: "What is the purpose of the SQL ORDER BY keyword ?", options: ["Filter rows", "Sort query results", "Group rows", "Create tables"], answer: 1, explanation: "ORDER BY defines sort order for the returned rows." },
    { q: "What is AND operator used for ?", options: ["Either condition may be true", "Negate a condition", "Require multiple conditions to be true", "Join tables"], answer: 2, explanation: "AND keeps rows only when all predicates are TRUE." },
    { q: "Syntax of AND Operator ?", options: ["condition1 OR condition2", "NOT condition", "condition1 AND condition2", "condition1 XOR condition2"], answer: 2, explanation: "Use AND between two (or more) boolean expressions." },
    { q: "The AND operator is used to filter records based on more than one condition.", options: ["True", "False", "Sometimes", "Never"], answer: 0, explanation: "AND enforces that all listed conditions are TRUE." },
    { q: "What is OR operator used for ?", options: ["Both conditions must be true", "Either of multiple conditions can be true", "Negate a condition", "Sort rows"], answer: 1, explanation: "OR passes a row when any predicate is TRUE." },
    { q: "Syntax of OR Operator ?", options: ["condition1 OR condition2", "condition1 AND condition2", "NOT condition", "condition1 NOR condition2"], answer: 0, explanation: "Use OR between boolean predicates." },
    { q: "What is the primary purpose of the SQL OR operator ?", options: ["Demand both conditions", "Return TRUE if any condition is TRUE", "Negate conditions", "Create groups"], answer: 1, explanation: "OR is TRUE when at least one operand is TRUE." },
    { q: "What is NOT operator used for ?", options: ["Add rows", "Reverse a condition's truth value", "Sort rows", "Create a column"], answer: 1, explanation: "NOT inverts TRUE↔FALSE." },
    { q: "Syntax of NOT Operator ?", options: ["DENY condition", "NOT condition", "NEGATE: condition", "condition NOT"], answer: 1, explanation: "Standard SQL uses NOT <predicate>." },
    { q: "What is the primary purpose of the SQL NOT operator ?", options: ["To negate a condition", "To sort rows", "To group rows", "To join tables"], answer: 0, explanation: "NOT reverses the truth value of a predicate." },
    { q: "What is INSERT INTO statement is used for ?", options: ["Modify rows", "Add new rows", "Delete rows", "Create database"], answer: 1, explanation: "INSERT INTO adds one or more records." },
    { q: "Correct Syntax of INSERT INTO statement ?", options: ["INSERT table VALUES (...);", "INSERT INTO table_name (col1,col2) VALUES (val1,val2);", "ADD ROW table_name (...);", "PUT INTO table_name (...);"], answer: 1, explanation: "Specifying the column list is good practice." },
    { q: "What is the purpose of the SQL INSERT INTO statement ?", options: ["Select records", "Add new records", "Delete the table", "Rename a table"], answer: 1, explanation: "INSERT INTO creates new rows in a table." },
    { q: "What is a NULL value in SQL ?", options: ["Zero", "Empty string", "Unknown/absent value", "False"], answer: 2, explanation: "NULL means missing/unknown; it isn't 0 or empty string." },
    { q: "What is the purpose of the SQL UPDATE statement ?", options: ["Create a table", "Modify existing rows", "Delete rows", "Grant permissions"], answer: 1, explanation: "UPDATE changes column values for matched rows." },
    { q: "What is the purpose of the SQL DELETE statement?", options: ["Drop table", "Remove matching rows", "Create database", "Backup data"], answer: 1, explanation: "DELETE removes rows that satisfy the WHERE condition." },
    { q: "Syntax of NULL ?", options: ["column = NULL", "column IS NULL", "NULL EQUAL column", "SET column TO NULL WHERE ..."], answer: 1, explanation: "Use IS NULL / IS NOT NULL to test for NULL." },
    { q: "Syntax of UPDATE statement ?", options: ["UPDATE table_name SET col=value WHERE condition;", "CHANGE table SET col=value;", "MODIFY table_name col=value WHERE condition;", "ALTER table SET col=value;"], answer: 0, explanation: "Standard UPDATE syntax includes SET and optional WHERE." },
    { q: "Syntax of DELETE statement ?", options: ["DELETE table_name WHERE condition;", "DELETE FROM table_name WHERE condition;", "REMOVE FROM table_name WHERE condition;", "DROP FROM table_name WHERE condition;"], answer: 1, explanation: "Use DELETE FROM ... WHERE ...;" },
    { q: "What would the following query do in SQL Server? SELECT TOP 5 * FROM Customers;", options: ["Return first 5 rows", "Return last 5 rows", "Return 5 columns", "Delete 5 rows"], answer: 0, explanation: "TOP 5 limits the result to 5 rows in SQL Server/Access." },
    { q: "What is the use of Aggregate Function ?", options: ["Operate on each row individually", "Summarize across multiple rows", "Create tables", "Sort results"], answer: 1, explanation: "Aggregates compute MIN, MAX, SUM, AVG, COUNT over sets of rows." },
    { q: "What are Aggregate Function ?", options: ["MIN, MAX, AVG, COUNT, SUM", "JOIN, WHERE, ORDER", "INT, VARCHAR, DATE", "GRANT, REVOKE, DENY"], answer: 0, explanation: "Common SQL aggregates." },
    { q: "How to use aggregate function ?", options: ["Only in INSERT", "In SELECT expressions, often with GROUP BY", "Only in DELETE", "Only in UPDATE"], answer: 1, explanation: "Example: SELECT COUNT(*) FROM table; or per-group with GROUP BY." },
    { q: "What is MIN() used for ?", options: ["Maximum value", "Average value", "Smallest value", "Sum of values"], answer: 2, explanation: "MIN returns the minimum." },
    { q: "What is MAX() used for ?", options: ["Largest value", "Smallest value", "Row count", "Median value"], answer: 0, explanation: "MAX returns the maximum." },
    { q: "What is AVG() used for ?", options: ["Average value", "Maximum value", "Sum of values", "Row count"], answer: 0, explanation: "AVG returns the arithmetic mean." },
    { q: "What is COUNT() used for ?", options: ["Sum values", "Count rows", "Find minimum", "Find maximum"], answer: 1, explanation: "COUNT counts rows (COUNT(col) skips NULLs)." },
    { q: "What is SUM() used for ?", options: ["Total of values", "Average of values", "Min value", "Max value"], answer: 0, explanation: "SUM adds values across rows." },
    { q: "Correct Syntax of MIN() ?", options: ["GET MIN col FROM table;", "SELECT MIN(column) FROM table_name;", "MIN SELECT column FROM table;", "SELECT MIN FROM table;"], answer: 1, explanation: "SELECT MIN(col) FROM table;" },
    { q: "Correct Syntax of MAX() ?", options: ["SELECT MAX(column) FROM table_name;", "MAX SELECT column FROM table;", "GET MAX col FROM table;", "SELECT MAX FROM table;"], answer: 0, explanation: "SELECT MAX(col) FROM table;" },
    { q: "Correct Syntax of AVG() ?", options: ["SELECT AVG(column) FROM table_name;", "AVG SELECT column FROM table;", "SELECT AVERAGE column FROM table;", "GET AVG col FROM table;"], answer: 0, explanation: "SELECT AVG(col) FROM table;" },
    { q: "Correct Syntax of COUNT() ?", options: ["SELECT COUNT(*) FROM table_name;", "COUNT SELECT * FROM table;", "SELECT COUNT FROM table;", "GET COUNT table;"], answer: 0, explanation: "SELECT COUNT(*) FROM table; counts all rows." },
    { q: "Correct Syntax of SUM() ?", options: ["SELECT SUM(column) FROM table_name;", "SUM SELECT column FROM table;", "GET SUM table;", "SELECT SUM FROM table;"], answer: 0, explanation: "SELECT SUM(col) FROM table;" },
    { q: "What does the SQL MIN() function do ?", options: ["Returns the largest value", "Returns the smallest value", "Returns the sum", "Returns the average"], answer: 1, explanation: "MIN returns the minimum value." },
    { q: "What does the SQL COUNT() function do ?", options: ["Counts rows", "Sums a column", "Finds smallest value", "Finds largest value"], answer: 0, explanation: "COUNT counts rows (or non-NULLs for COUNT(col))." },
    { q: "What does the SQL SUM() function do ?", options: ["Returns the sum of a numeric column", "Counts distinct values", "Returns the median", "Sorts data"], answer: 0, explanation: "SUM totals numbers across rows." },
    { q: "What does the SQL AVG() function do ?", options: ["Returns the average of a numeric column", "Returns the maximum value", "Returns the sum", "Returns the count"], answer: 0, explanation: "AVG computes mean value." },
    { q: "What does the SQL LIKE operator do ?", options: ["Exact match", "Pattern matching with % and _", "Sorts rows", "Creates index"], answer: 1, explanation: "LIKE supports wildcard matching." },
    { q: "What is the primary purpose of the SQL IN operator ?", options: ["Range test", "Membership test", "Join tables", "Group rows"], answer: 1, explanation: "IN checks if a value equals any value in a list." },
    { q: "Which SQL statement selects all products with a price between 10 and 20 ?", options: ["SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;", "SELECT * FROM Products WHERE Price > 10 OR Price < 20;", "SELECT * FROM Products WHERE Price = 10 TO 20;", "SELECT * FROM Products HAVING Price 10 AND 20;"], answer: 0, explanation: "BETWEEN is inclusive of 10 and 20." },
    { q: "Which SQL statement creates an alias for the CustomerID column as 'ID' ?", options: ["SELECT CustomerID AS ID FROM Customers;", "SELECT ALIAS ID CustomerID FROM Customers;", "SELECT CustomerID = ID FROM Customers;", "SELECT ID: CustomerID FROM Customers;"], answer: 0, explanation: "Use AS for a result-set alias." },
    { q: "Correct Syntax of alias ?", options: ["SELECT column -> alias FROM table;", "SELECT column AS alias FROM table;", "SELECT alias(column) FROM table;", "SELECT column FROM table ALIAS alias;"], answer: 1, explanation: "SELECT expr AS alias FROM table;" },
    { q: "What is the primary purpose of an SQL JOIN ?", options: ["Delete rows", "Combine rows from tables based on related columns", "Create indexes", "Rename tables"], answer: 1, explanation: "JOINs relate rows across tables." },
    { q: "What are the types of JOINS in SQL ?", options: ["INNER, LEFT, RIGHT, FULL OUTER", "UP, DOWN, LEFT, RIGHT", "INNER, OUTER, UPPER, LOWER", "PRIMARY, FOREIGN, UNIQUE, CHECK"], answer: 0, explanation: "Common logical joins: INNER/LEFT/RIGHT/FULL." },
    { q: "What is the purpose of the SQL INNER JOIN keyword ?", options: ["Return all rows from left table", "Return all rows from right table", "Return only matching rows from both tables", "Return a Cartesian product"], answer: 2, explanation: "INNER JOIN keeps matches only." },
    { q: "Correct Syntax of INNER JOIN ?", options: ["SELECT ... FROM A JOIN B;", "SELECT ... FROM A INNER JOIN B ON A.key=B.key;", "SELECT ... INNER A=B;", "JOIN A AND B BY key;"], answer: 1, explanation: "INNER JOIN ... ON join_condition." },
    { q: "What does the SQL LEFT JOIN keyword do ?", options: ["Keeps only matches", "Keeps all right rows", "Keeps all left rows and matches from right", "Deletes unmatched rows"], answer: 2, explanation: "Unmatched right columns are NULL." },
    { q: "Correct Syntax of LEFT JOIN ?", options: ["SELECT ... FROM A LEFT JOIN B ON A.key=B.key;", "SELECT ... LEFT A=B;", "SELECT ... FROM A JOIN LEFT B;", "SELECT ... FROM A LEFT ON B;"], answer: 0, explanation: "LEFT JOIN ... ON condition." },
    { q: "What does the SQL RIGHT JOIN keyword do ?", options: ["Keeps all right rows and matches from left", "Keeps all left rows only", "Keeps matches only", "Produces cross product"], answer: 0, explanation: "Unmatched left columns are NULL." },
    { q: "Correct Syntax of RIGHT JOIN ?", options: ["SELECT ... FROM A RIGHT JOIN B ON A.key=B.key;", "SELECT ... RIGHT A=B;", "SELECT ... FROM A JOIN RIGHT B;", "SELECT ... FROM A RIGHT ON B;"], answer: 0, explanation: "RIGHT JOIN ... ON condition." },
    { q: "What does the SQL FULL OUTER JOIN keyword do ?", options: ["Keeps only matches", "Keeps all rows from both tables, matching where possible", "Keeps only left table", "Keeps only right table"], answer: 1, explanation: "FULL OUTER JOIN returns matches plus unmatched from both sides." },
    { q: "Correct Syntax of FULL OUTER JOIN ?", options: ["SELECT ... FROM A FULL OUTER JOIN B ON A.key=B.key;", "SELECT ... OUTER A=B;", "SELECT ... FROM A FULL JOIN B; (no ON needed)", "SELECT ... FROM A JOIN B FULL;"], answer: 0, explanation: "Use FULL OUTER JOIN ... ON join_condition (syntax may vary)." },
    { q: "What is the purpose of a self join in SQL ?", options: ["Join a table with itself to compare rows", "Join two databases", "Join views only", "Create a new table"], answer: 0, explanation: "Self join uses aliases of the same table." },
    { q: "Correct Syntax of self join ?", options: ["SELECT ... FROM TableA JOIN TableA ON ...;", "SELECT ... FROM TableA a JOIN TableA b ON a.col=b.col;", "SELECT ... SELF JOIN TableA;", "JOIN SELF TableA WITH TableA;"], answer: 1, explanation: "Alias the same table twice and join by condition." },
    { q: "What is the primary purpose of the SQL UNION operator ?", options: ["Combine results and remove duplicates", "Only intersect results", "Update tables", "Create a view"], answer: 0, explanation: "UNION performs a distinct concatenation of results." },
    { q: "Correct Syntax of UNION operator ?", options: ["SELECT ... UNION SELECT ...", "SELECT ... MERGE SELECT ...", "SELECT ... PLUS SELECT ...", "SELECT ... APPEND SELECT ..."], answer: 0, explanation: "Place UNION between two compatible SELECTs." },
    { q: "Which aggregate functions are commonly used with the GROUP BY statement ?", options: ["JOIN, WHERE, ORDER", "MIN, MAX, AVG, COUNT, SUM", "INT, DATE, CHAR", "GRANT, REVOKE, DENY"], answer: 1, explanation: "These compute per-group summaries." },
    { q: "What is the use of GROUP BY Clause in SQL ?", options: ["Filter rows", "Group rows to apply aggregates per group", "Sort rows", "Delete rows"], answer: 1, explanation: "GROUP BY creates groups (one row per group)." },
    { q: "Correct Syntax of GROUP BY clause ?", options: ["GROUP BY SELECT col;", "SELECT col, AGG(...) FROM table GROUP BY col;", "SELECT GROUP BY col FROM table;", "GROUP table BY col;"], answer: 1, explanation: "Columns in SELECT not aggregated must appear in GROUP BY." },
    { q: "What is the primary purpose of the SQL HAVING clause ?", options: ["Filter rows before grouping", "Filter groups after aggregation", "Sort groups", "Join tables"], answer: 1, explanation: "HAVING is evaluated after GROUP BY." },
    { q: "Correct Syntax of HAVING clause ?", options: ["SELECT ... HAVING ... GROUP BY ...;", "SELECT ... FROM ... GROUP BY col HAVING aggregate_condition;", "SELECT HAVING ... FROM ...;", "GROUP BY HAVING ...;"], answer: 1, explanation: "HAVING follows GROUP BY." },
    { q: "What is the primary purpose of comments in SQL ?", options: ["Execute faster", "Explain code and are ignored by the engine", "Change results", "Grant permissions"], answer: 1, explanation: "Comments improve readability: -- line or /* block */." },
    { q: "What are the types of Operators in SQL ?", options: ["Arithmetic, Comparison, Logical, Bitwise", "Start, Stop, Pause, Resume", "Read, Write, Execute, Delete", "View, Index, Table, Column"], answer: 0, explanation: "Core operator categories in SQL." },
    { q: "What are SQL Arithmetic Operators ?", options: ["=, <>, >, <, >=, <=", "AND, OR, NOT", "+, -, *, /, %", "&, |, ^, ~"], answer: 2, explanation: "Arithmetic operators operate on numeric expressions." },
    { q: "What are SQL Bitwise Operators ?", options: ["&, |, ^, ~ (and sometimes <<, >>)", "+, -, *", "AND, OR, NOT", "=, <>, >"], answer: 0, explanation: "Bitwise operators work at the bit level (dialect-dependent)." },
    { q: "What are SQL Comparison Operators ?", options: ["=, <>, >, <, >=, <=", "AND, OR, NOT", "+, -, *, /", "&, |, ^"], answer: 0, explanation: "Used in WHERE/HAVING predicates." },
    { q: "What are SQL Compound Operators ?", options: ["+=, -=, *=, /=, %= (dialect-specific)", "=, <>, >, <", "AND, OR, NOT", "JOIN, GROUP, ORDER"], answer: 0, explanation: "Compound assignment operators exist in T-SQL and some dialects." },
    { q: "What are SQL Logical Operators ?", options: ["AND, OR, NOT", "+, -, *", "=, <>, >", "&, |, ^"], answer: 0, explanation: "Logical operators combine/negate conditions." },
    { q: "Which SQL operator is used to add two numbers ?", options: ["-", "*", "+", "/"], answer: 2, explanation: "Use the + operator for addition." },
    { q: "What are SQL Variables ?", options: ["Permanent tables", "Temporary placeholders to store single values in a session/proc", "Indexes", "Backups"], answer: 1, explanation: "Variables hold values for use in expressions/procedures (syntax varies by DB)." },
    { q: "What is Primary Key in SQL ?", options: ["Allows NULLs and duplicates", "Uniquely identifies each row and cannot be NULL", "Only identifies some rows", "Stores text only"], answer: 1, explanation: "PRIMARY KEY implies UNIQUE + NOT NULL." },
    { q: "What is Foreign Key in SQL ?", options: ["Random number", "Column that references a primary/unique key in another table", "Index name", "Temporary key"], answer: 1, explanation: "Enforces referential integrity between tables." },
    { q: "How to Create new Table in SQL ?", options: ["MAKE TABLE name (...);", "CREATE TABLE table_name (col1 type, col2 type, ...);", "NEW TABLE table_name (...);", "ADD TABLE table_name (...);"], answer: 1, explanation: "CREATE TABLE defines a new schema object." },
    { q: "How to Delete Table in SQL ?", options: ["DELETE TABLE table_name;", "DROP TABLE table_name;", "REMOVE table_name;", "CLEAR TABLE table_name;"], answer: 1, explanation: "DROP TABLE removes the table and its data." },
    { q: "How to DROP Database in SQL ?", options: ["DROP DATABASE database_name;", "DELETE DATABASE database_name;", "REMOVE DB database_name;", "TRUNCATE DATABASE database_name;"], answer: 0, explanation: "DROP DATABASE deletes the entire database (privileges needed)." },
    { q: "Difference between DELETE and DROP ?", options: ["DELETE removes rows; DROP removes the whole table object", "Both remove only one row", "DROP removes rows; DELETE removes database", "They are identical"], answer: 0, explanation: "DELETE is DML; DROP is DDL." },
    { q: "Difference between AND and OR ?", options: ["AND allows either condition; OR requires both", "AND requires all conditions true; OR requires any condition true", "Both require all conditions", "Both require any condition"], answer: 1, explanation: "AND = intersection; OR = union of conditions." },
    { q: "What is Subquery in SQL ?", options: ["A comment", "A query nested inside another query", "A table name", "An index"], answer: 1, explanation: "Subqueries can appear in SELECT/WHERE/FROM, etc." },
    { q: "Correct Syntax of Subquery in SQL ?", options: ["SELECT ... IN SELECT ...;", "SELECT ... FROM table WHERE col IN (SELECT ... FROM table2 WHERE ...);", "SUBQUERY SELECT ...;", "SELECT ... WHERE (SUBQUERY);"], answer: 1, explanation: "Common pattern uses IN/EXISTS or comparisons with a nested SELECT." },
    { q: "Difference between WHERE and HAVING ?", options: ["WHERE filters groups; HAVING filters rows", "WHERE filters rows; HAVING filters groups after aggregation", "Both filter rows only", "Both filter groups only"], answer: 1, explanation: "HAVING applies after GROUP BY; WHERE applies before." },
    { q: "Difference between IN and BETWEEN operators ?", options: ["IN tests membership in a set; BETWEEN tests inclusive range", "Both test ranges", "Both test membership only", "Neither can be used in WHERE"], answer: 0, explanation: "IN = list membership; BETWEEN = low..high inclusive." },
    { q: "Difference between MIN() and MAX() in SQL ?", options: ["MIN returns smallest; MAX returns largest", "Both return average", "Both return sum", "MIN returns largest; MAX returns smallest"], answer: 0, explanation: "Self‑explanatory." },
    { q: "Difference between AVG() and SUM() in SQL ?", options: ["AVG returns sum; SUM returns average", "AVG returns average; SUM returns total", "Both return total", "Both return average"], answer: 1, explanation: "AVG = mean; SUM = total." },
    { q: "What is the use of ORDER BY in SQL ?", options: ["Filter rows", "Sort result set", "Group rows", "Join tables"], answer: 1, explanation: "ORDER BY defines ordering of returned rows." },
    { q: "Which of the following SQL statements would return a list of all unique countries from a table named 'Customers' ?", options: ["SELECT DISTINCT Country FROM Customers;", "SELECT Country FROM Customers;", "SELECT UNIQUE Country FROM Customers;", "SELECT Country FROM Customers ORDER BY Country;"], answer: 0, explanation: "Use DISTINCT to eliminate duplicates." },
    { q: "ASC means?", options: ["Descending", "Ascending", "Aggregate", "Approximate"], answer: 1, explanation: "ASC sorts from small→large / A→Z." },
    { q: "DESC means?", options: ["Descending", "Ascending", "Describe table", "Decision"], answer: 0, explanation: "DESC sorts from large→small / Z→A." },
    { q: "BETWEEN includes which bounds?", options: ["Lower only", "Upper only", "Both", "Neither"], answer: 2, explanation: "BETWEEN is inclusive of both endpoints." },
    { q: "LIKE operator syntax?", options: ["LIKE pattern col", "col LIKE pattern", "LIKE(col, pattern)", "pattern LIKE col"], answer: 1, explanation: "col LIKE 'A%' uses % and _ wildcards." },
    { q: "IN operator syntax?", options: ["col IN value", "IN (col) (v1,v2)", "col IN (v1, v2, ...) ", "IN col v1 v2"], answer: 2, explanation: "Use IN for membership tests." },
    { q: "Purpose of AND operator?", options: ["Either condition", "Negate condition", "Both conditions must be true", "Sorts rows"], answer: 2, explanation: "AND requires all predicates to be TRUE." },
    { q: "AND operator syntax?", options: ["cond1 OR cond2", "cond1 AND cond2", "NOT cond", "cond1 & cond2"], answer: 1, explanation: "Use AND between boolean predicates." },
    { q: "Purpose of OR operator?", options: ["Both must be true", "Either can be true", "Negation", "Join rows"], answer: 1, explanation: "OR passes rows if any predicate is TRUE." },
    { q: "OR operator syntax?", options: ["cond1 OR cond2", "cond1 AND cond2", "NOT cond", "cond1 XOR cond2"], answer: 0, explanation: "Use OR to allow alternatives." },
    { q: "Purpose of NOT operator?", options: ["Add rows", "Sort rows", "Negate a condition", "Create table"], answer: 2, explanation: "NOT flips TRUE/FALSE of a predicate." },
    { q: "NOT operator syntax?", options: ["DENY condition", "NEG condition", "NOT condition", "! condition"], answer: 2, explanation: "Standard SQL uses NOT <predicate>." },
    { q: "INSERT INTO used for?", options: ["Read rows", "Add new rows", "Delete table", "Grant permissions"], answer: 1, explanation: "INSERT adds one or more rows." },
    { q: "INSERT INTO syntax?", options: ["INSERT table VALUES (...)", "INSERT INTO table (cols) VALUES (...);", "ADD ROW table (...)", "PUT INTO table (...);"], answer: 1, explanation: "Column list is recommended." },
    { q: "What is a NULL value?", options: ["Zero", "Empty string", "Unknown/absence of value", "False"], answer: 2, explanation: "NULL means missing/unknown—propagates in expressions." },
    { q: "Purpose of UPDATE?", options: ["Change existing rows", "Create database", "Drop rows", "Backup table"], answer: 0, explanation: "UPDATE modifies column values for matching rows." },
    { q: "Purpose of DELETE?", options: ["Remove table", "Remove matching rows", "Remove database", "Remove column"], answer: 1, explanation: "DELETE removes rows based on WHERE predicate." },
    { q: "COUNT(*) does what?", options: ["Counts non-NULL only", "Counts all rows", "Sums values", "Averages values"], answer: 1, explanation: "COUNT(*) counts rows regardless of NULLs." },
    { q: "Which keyword removes duplicate rows?", options: ["UNIQUE", "DISTINCT", "ONLY", "PRIMARY"], answer: 1, explanation: "DISTINCT deduplicates results." },
    { q: "JOIN: Orders × Customers (INNER)", options: ["All customers", "Only matching orders-customers", "Only unmatched rows", "Deletes unmatched"], answer: 1, explanation: "INNER returns matches only." },
    { q: "JOIN: Customers LEFT JOIN Orders", options: ["Only customers with orders", "All customers; orders if exist", "Only orders", "Cross join"], answer: 1, explanation: "LEFT keeps all left rows." },
    { q: "JOIN: Orders RIGHT JOIN Employees", options: ["Only orders", "All employees; orders if exist", "Only employees with orders", "No employees"], answer: 1, explanation: "RIGHT keeps all right rows (employees)." },
    { q: "GROUP: SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;", options: ["Counts countries", "Counts customers per country", "Counts distinct countries", "Sums IDs"], answer: 1, explanation: "Grouped aggregate." },
    { q: "HAVING: ... HAVING COUNT(CustomerID) > 5;", options: ["Filters rows before grouping", "Filters groups after aggregation", "Sorts groups", "Creates index"], answer: 1, explanation: "HAVING filters aggregated groups." },
    { q: "ORDER: ... ORDER BY COUNT(CustomerID) DESC;", options: ["Sort by name", "Sort by count descending", "Random order", "Remove duplicates"], answer: 1, explanation: "ORDER BY aggregate value." },
    { q: "LIMIT/TOP: TOP 3 / LIMIT 3", options: ["Returns 3 columns", "Returns 3 rows", "Returns last 3 rows", "Returns rows 3..end"], answer: 1, explanation: "Row-limit in different dialects." },
    { q: "DELETE row by name", options: ["Drops table", "Removes matching row(s)", "Creates row", "Backs up table"], answer: 1, explanation: "DELETE ... WHERE ..." },
    { q: "DELETE all rows", options: ["Drops table", "Removes all rows", "No-op", "Creates table"], answer: 1, explanation: "DELETE without WHERE removes every row." },
    { q: "DROP TABLE", options: ["Remove rows", "Remove table definition and data", "Disable table", "Clear cache"], answer: 1, explanation: "DDL drop object." },
    { q: "UPDATE by id", options: ["Insert row", "Update target rows", "Delete row", "No change"], answer: 1, explanation: "UPDATE ... WHERE ..." },
    { q: "UPDATE all (no WHERE)", options: ["Updates all rows", "Updates none", "Deletes all", "Creates column"], answer: 0, explanation: "Always include WHERE to target rows." },
    { q: "IS NULL vs IS NOT NULL", options: ["Check equality", "Null-safe compare", "Test for missing vs present", "Join strategy"], answer: 2, explanation: "Use IS (NOT) NULL." },
    { q: "INSERT (full column list)", options: ["Update row", "Insert one row", "Drop table", "Merge"], answer: 1, explanation: "INSERT INTO ... VALUES (...)." },
    { q: "INSERT (partial columns)", options: ["Fails always", "Uses defaults/NULL for others", "Creates new columns", "Deletes columns"], answer: 1, explanation: "Missing columns take defaults/NULL." },
    { q: "INSERT (multi-values)", options: ["Insert many rows", "Update many rows", "Create many tables", "No-op"], answer: 0, explanation: "Multiple tuples added." },
    { q: "NOT operator examples (NOT LIKE / NOT BETWEEN)", options: ["Selects only matches", "Negates the predicate", "Sorts rows", "Creates index"], answer: 1, explanation: "NOT reverses the boolean test." },
    { q: "OR example (Germany OR Spain)", options: ["Both must be true", "Either is sufficient", "Neither is allowed", "Only Spain"], answer: 1, explanation: "OR allows alternatives." },
    { q: "ORDER BY Price ASC", options: ["Descending", "Ascending", "Random", "Grouped"], answer: 1, explanation: "ASC ascending." },
    { q: "ORDER BY Price DESC", options: ["Ascending", "Descending", "Random", "Grouped"], answer: 1, explanation: "DESC descending." },
    { q: "DROP DATABASE testDB;", options: ["Drop one table", "Drop entire database", "Backup database", "Create database"], answer: 1, explanation: "Removes DB (engine rules/privileges)." },
    { q: "CREATE TABLE Persons (...)", options: ["Insert data", "Define schema", "Drop table", "Create view"], answer: 1, explanation: "DDL create table." },
    { q: "CTAS: CREATE TABLE ... AS SELECT ...", options: ["Create view", "Create table from query result", "Update table", "Delete rows"], answer: 1, explanation: "Copies result into new table." },
    { q: "ALTER TABLE ADD Email", options: ["Add row", "Add column", "Add index", "Add database"], answer: 1, explanation: "ADD COLUMN." },
    { q: "ALTER TABLE DROP COLUMN Email", options: ["Drop table", "Drop column", "Drop row", "Drop DB"], answer: 1, explanation: "Removes column definition and its data." },
    { q: "SELECT INTO backup", options: ["Export CSV", "Create new table with data (SQL Server/Access)", "Create view", "Grant access"], answer: 1, explanation: "SELECT INTO creates a table from result." },
    { q: "SELECT INTO with WHERE Germany", options: ["Copy all customers", "Copy only German customers into new table", "Delete German customers", "Update customers"], answer: 1, explanation: "Filtered copy into new table." },
    { q: "EXISTS subquery (Price < 20)", options: ["Suppliers with no products", "Suppliers with at least one product priced < 20", "All suppliers", "Only expensive suppliers"], answer: 1, explanation: "EXISTS passes when subquery returns any row." }
];

// Advanced: query interpretation, joins, grouping, limits, DDL
const ADV_BANK = [
    { q: "What this Query do: SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;", options: ["Selects products with price < 10 or > 20", "Selects products with price 10 to 20 inclusive", "Selects products strictly between 10 and 20", "Selects all products and sorts by price"], answer: 1, explanation: "BETWEEN is inclusive of both bounds." },
    { q: "What this Query do: SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20;", options: ["Only prices 10 or 20", "Prices <10 or >20", "Prices 10–20 inclusive", "Creates a price index"], answer: 1, explanation: "NOT BETWEEN picks values outside the range." },
    { q: "What this Query do: SELECT * FROM Customers WHERE Country IN ('Germany','France','UK');", options: ["Customers not in those", "Only those three countries", "All customers", "Only NULL countries"], answer: 1, explanation: "IN filters to the listed set." },
    { q: "What this Query do: SELECT * FROM Customers WHERE Country NOT IN ('Germany','France','UK');", options: ["Only those three", "All except those three", "Only NULL countries", "Sorts by country"], answer: 1, explanation: "NOT IN excludes the listed values." },
    { q: "What this Query do: SELECT * FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders);", options: ["Never ordered", "Have at least one order", "All customers", "Only NULL IDs"], answer: 1, explanation: "IN + subquery yields customers with orders." },
    { q: "What this Query do: SELECT COUNT(*) FROM Products;", options: ["Counts non-NULL names", "Counts all product rows", "Sums prices", "Counts distinct categories"], answer: 1, explanation: "COUNT(*) counts rows." },
    { q: "What this Query do: SELECT COUNT(ProductName) FROM Products;", options: ["Counts all rows", "Counts non-NULL ProductName", "Counts distinct names", "Counts names > 'M'"], answer: 1, explanation: "COUNT(col) skips NULLs." },
    { q: "What this Query do: SELECT COUNT(DISTINCT Price) FROM Products;", options: ["Counts all prices", "Counts unique price values", "Counts NULL prices", "Counts distinct products"], answer: 1, explanation: "DISTINCT removes duplicates before count." },
    { q: "What this Query do: SELECT SUM(Quantity) FROM OrderDetails;", options: ["Average quantity", "Total quantity across rows", "Counts rows", "Max quantity"], answer: 1, explanation: "SUM adds values across rows." },
    { q: "What this Query do: SELECT AVG(Price) FROM Products WHERE CategoryID = 1;", options: ["Average price for Category 1", "Average price overall", "Median price", "Max price"], answer: 0, explanation: "WHERE limits rows averaged." },
    { q: "What this Query do: SELECT * FROM Customers WHERE CustomerName LIKE 'a%';", options: ["Ends with a", "Starts with a", "Contains a anywhere", "Equal to a"], answer: 1, explanation: "'a%' matches prefix a." },
    { q: "What this Query do: SELECT * FROM Customers WHERE city LIKE 'L_nd__';", options: ["Lond only", "Len duo", "L + one char + nd + two chars", "L + any + any"], answer: 2, explanation: "_ matches one char; pattern has 2 trailing underscores." },
    { q: "What this Query do: SELECT CustomerID AS ID FROM Customers;", options: ["Rename table", "Create column", "Alias CustomerID as ID in result", "Delete column"], answer: 2, explanation: "AS gives a result alias." },
    // 106
    {
        q: "What this Query do: SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;",
        options: [
            "Selects products with price < 10 or > 20",
            "Selects products priced 10 to 20 (inclusive)",
            "Selects products priced strictly >10 and <20 (exclusive)",
            "Selects all products and sorts by price"
        ],
        answer: 1,
        explanation: "BETWEEN is inclusive of both bounds (10 and 20)."
    },
    // 107
    {
        q: "What this Query do: SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20;",
        options: [
            "Selects only products priced 10 or 20",
            "Selects products priced <10 or >20",
            "Selects products priced strictly >10 and <20",
            "Creates a price index"
        ],
        answer: 1,
        explanation: "NOT BETWEEN returns rows outside the inclusive 10–20 range."
    },
    // 108
    {
        q: "What this Query do: SELECT * FROM Products WHERE Price BETWEEN 10 AND 20 AND CategoryID IN (1,2,3);",
        options: [
            "Selects products in categories 1,2,3 with any price",
            "Selects products priced 10–20 from categories 1,2,3",
            "Selects products priced 10–20 from all categories",
            "Selects only CategoryID 1 with price 10–20"
        ],
        answer: 1,
        explanation: "Both conditions must hold: price in 10–20 and CategoryID ∈ {1,2,3}."
    },
    // 109
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');",
        options: [
            "Selects customers from any country except the three listed",
            "Selects customers from Germany, France, or the UK",
            "Selects only NULL countries",
            "Drops unmatched customers"
        ],
        answer: 1,
        explanation: "IN matches any of the listed values."
    },
    // 110
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country NOT IN ('Germany', 'France', 'UK');",
        options: [
            "Selects only those three countries",
            "Selects every country except Germany, France, and the UK",
            "Selects only customers with Country = NULL",
            "Sorts by Country"
        ],
        answer: 1,
        explanation: "NOT IN excludes the listed values (NULLs do not pass the predicate)."
    },
    // 111
    {
        q: "What this Query do: SELECT * FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders);",
        options: [
            "Returns customers who never placed any order",
            "Returns customers who have at least one order",
            "Returns all customers",
            "Returns only customers with NULL CustomerID"
        ],
        answer: 1,
        explanation: "The subquery yields IDs with orders; IN keeps those customers."
    },
    // 112
    {
        q: "What this Query do: SELECT COUNT(*) FROM Products;",
        options: [
            "Counts non-NULL product names",
            "Counts all product rows",
            "Counts distinct categories",
            "Sums product prices"
        ],
        answer: 1,
        explanation: "COUNT(*) counts rows regardless of NULLs."
    },
    // 113
    {
        q: "What this Query do: SELECT COUNT(ProductName) FROM Products;",
        options: [
            "Counts all rows",
            "Counts rows where ProductName is NOT NULL",
            "Counts distinct product names",
            "Counts names starting with 'P'"
        ],
        answer: 1,
        explanation: "COUNT(col) ignores NULLs."
    },
    // 114
    {
        q: "What this Query do: SELECT COUNT(ProductID) FROM Products WHERE Price > 20;",
        options: [
            "Counts all products",
            "Counts products priced > 20 (with non-NULL ProductID)",
            "Counts products priced ≤ 20",
            "Counts distinct ProductID overall"
        ],
        answer: 1,
        explanation: "Filtered by WHERE, then COUNT(ProductID) (usually non-NULL in PK)."
    },
    // 115
    {
        q: "What this Query do: SELECT COUNT(DISTINCT Price) FROM Products;",
        options: [
            "Counts all price values",
            "Counts unique price values",
            "Counts only NULL prices",
            "Counts distinct products"
        ],
        answer: 1,
        explanation: "DISTINCT removes duplicates before counting."
    },
    // 116
    {
        q: "What this Query do: SELECT SUM(Quantity) FROM OrderDetails;",
        options: [
            "Averages quantity",
            "Totals quantity across all rows",
            "Counts rows",
            "Returns the maximum quantity"
        ],
        answer: 1,
        explanation: "SUM aggregates numeric values."
    },
    // 117
    {
        q: "What this Query do: SELECT SUM(Quantity) FROM OrderDetails WHERE ProductId = 11;",
        options: [
            "Sums all products' quantity",
            "Sums quantity only for ProductId = 11",
            "Returns ProductId with highest quantity",
            "Counts orders for ProductId = 11"
        ],
        answer: 1,
        explanation: "WHERE limits rows summed."
    },
    // 118
    {
        q: "What this Query do: SELECT SUM(Quantity) AS total FROM OrderDetails;",
        options: [
            "Creates a new column in the table",
            "Returns the sum labeled as total",
            "Returns individual quantities",
            "Returns average quantity"
        ],
        answer: 1,
        explanation: "AS total is a result-set alias."
    },
    // 119
    {
        q: "What this Query do: SELECT AVG(Price) FROM Products;",
        options: [
            "Returns sum of prices",
            "Returns average price across all products",
            "Returns maximum price",
            "Returns count of products"
        ],
        answer: 1,
        explanation: "AVG computes mean value."
    },
    // 120
    {
        q: "What this Query do: SELECT AVG(Price) FROM Products WHERE CategoryID = 1;",
        options: [
            "Average price for CategoryID = 1 only",
            "Average price for all categories",
            "Median price for CategoryID = 1",
            "Maximum price for CategoryID = 1"
        ],
        answer: 0,
        explanation: "WHERE restricts rows included in the average."
    },
    // 121
    {
        q: "What this Query do: SELECT * FROM Customers WHERE CustomerName LIKE 'a%';",
        options: [
            "Name ends with 'a'",
            "Name starts with 'a'",
            "Name contains 'a' anywhere",
            "Name equals 'a'"
        ],
        answer: 1,
        explanation: "'a%' is a prefix match."
    },
    // 122
    {
        q: "What this Query do: SELECT * FROM Customers WHERE city LIKE 'L_nd__';",
        options: [
            "Matches any city starting with 'L'",
            "Matches cities with 'Lnd' anywhere",
            "Matches 'L' + one char + 'nd' + two chars",
            "Equals 'L_nd__'"
        ],
        answer: 2,
        explanation: "_ matches one character; pattern has two trailing underscores."
    },
    // 123
    {
        q: "What this Query do: SELECT CustomerID AS ID FROM Customers;",
        options: [
            "Creates new column 'ID' in table",
            "Aliases CustomerID as ID in result",
            "Deletes CustomerID",
            "Renames table"
        ],
        answer: 1,
        explanation: "AS creates a result alias."
    },
    // 124
    {
        q: "What this Query do: SELECT CustomerID ID FROM Customers;",
        options: [
            "Same as aliasing CustomerID as ID",
            "Syntax error in all SQL",
            "Creates physical column ID",
            "Selects only ID rows"
        ],
        answer: 0,
        explanation: "Most SQL dialects allow SELECT expr alias without AS."
    },
    // 125
    {
        q: "What this Query do: SELECT CustomerID AS ID, CustomerName AS Customer FROM Customers;",
        options: [
            "Creates two columns on disk",
            "Returns aliased columns ID and Customer",
            "Deletes CustomerName",
            "Renames table to Customers2"
        ],
        answer: 1,
        explanation: "Aliasing affects only the result column names."
    },
    // 126
    {
        q: "What this Query do: SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;",
        options: [
            "Returns all customers regardless of orders",
            "Returns only matching orders with their customer names",
            "Returns only unmatched rows",
            "Deletes unmatched rows"
        ],
        answer: 1,
        explanation: "INNER JOIN returns rows present on both sides per join condition."
    },
    // 127
    {
        q: "What this Query do: SELECT ProductID, ProductName, CategoryName FROM Products INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;",
        options: [
            "Returns only products without a category",
            "Returns matching products with their category name",
            "Returns all categories with NULL products",
            "Creates a materialized view"
        ],
        answer: 1,
        explanation: "INNER JOIN keeps matches only."
    },
    // 128
    {
        q: "What this Query do: SELECT Products.ProductID, Products.ProductName, Categories.CategoryName FROM Products INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;",
        options: [
            "Different from 127: returns unmatched rows too",
            "Same as 127 but with fully-qualified column names",
            "Creates a new table",
            "Groups by category"
        ],
        answer: 1,
        explanation: "Qualification doesn't change the join semantics."
    },
    // 129
    {
        q: "What this Query do: SELECT Products.ProductID, Products.ProductName, Categories.CategoryName FROM Products JOIN Categories ON Products.CategoryID = Categories.CategoryID;",
        options: [
            "LEFT JOIN semantics",
            "RIGHT JOIN semantics",
            "Same as INNER JOIN",
            "FULL OUTER JOIN semantics"
        ],
        answer: 2,
        explanation: "JOIN without modifier defaults to INNER JOIN in most dialects."
    },
    // 130
    {
        q: "What this Query do: SELECT Customers.CustomerName, Orders.OrderID FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID ORDER BY Customers.CustomerName;",
        options: [
            "Only customers that have orders",
            "All customers; orders if present, else NULLs",
            "Only orders without customers",
            "Deletes NULL orders"
        ],
        answer: 1,
        explanation: "LEFT JOIN keeps all left rows; unmatched right side is NULL."
    },
    // 131
    {
        q: "What this Query do: SELECT Orders.OrderID, Employees.LastName, Employees.FirstName FROM Orders RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID ORDER BY Orders.OrderID;",
        options: [
            "Only employees with orders",
            "All employees; orders if present",
            "All orders; employees if present",
            "Drops employees without orders"
        ],
        answer: 1,
        explanation: "RIGHT JOIN keeps all right rows (employees)."
    },
    // 132
    {
        q: "What this Query do: SELECT Customers.CustomerName, Orders.OrderID FROM Customers FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID ORDER BY Customers.CustomerName;",
        options: [
            "Only rows that match between tables",
            "All rows from both tables; matches where possible",
            "Left table only",
            "Right table only"
        ],
        answer: 1,
        explanation: "FULL OUTER JOIN = left + right with matches and unmatched."
    },
    // 133
    {
        q: "What this Query do: SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;",
        options: [
            "Counts countries overall",
            "Counts customers per country",
            "Counts distinct countries only",
            "Sums CustomerID"
        ],
        answer: 1,
        explanation: "One row per country with its customer count."
    },
    // 134
    {
        q: "What this Query do: SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country ORDER BY COUNT(CustomerID) DESC;",
        options: [
            "Counts and sorts countries by descending count",
            "Sorts alphabetically by country",
            "Filters to count > 5",
            "Removes duplicates"
        ],
        answer: 0,
        explanation: "ORDER BY the aggregate value descending."
    },
    // 135
    {
        q: "What this Query do: SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5;",
        options: [
            "Filters rows before grouping",
            "Filters groups where the count > 5",
            "Sorts groups",
            "Creates index on country"
        ],
        answer: 1,
        explanation: "HAVING filters after aggregation."
    },
    // 136
    {
        q: "What this Query do: SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5 ORDER BY COUNT(CustomerID) DESC;",
        options: [
            "Count, filter groups > 5, sort descending",
            "Filter rows > 5, then group",
            "Return all groups unsorted",
            "Create a view"
        ],
        answer: 0,
        explanation: "Typical GROUP BY + HAVING + ORDER BY pipeline."
    },
    // 137
    {
        q: "What this Query do: SELECT TOP 3 * FROM Customers;",
        options: [
            "Returns last 3 rows",
            "Returns first 3 rows (SQL Server/Access)",
            "Returns 3 columns",
            "Deletes 3 rows"
        ],
        answer: 1,
        explanation: "TOP limits rows in SQL Server/Access; order depends on ORDER BY."
    },
    // 138
    {
        q: "What this Query do: SELECT * FROM Customers LIMIT 3;",
        options: [
            "Returns first 3 rows (MySQL/PostgreSQL/SQLite)",
            "Returns last 3 rows",
            "Returns 3 columns",
            "Creates a limit on table size"
        ],
        answer: 0,
        explanation: "LIMIT is the row limiter in MySQL/PG/SQLite; pair with ORDER BY."
    },
    // 139
    {
        q: "What this Query do: DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';",
        options: [
            "Deletes the Customers table",
            "Deletes matching row(s) only",
            "Deletes all rows",
            "Backs up the table"
        ],
        answer: 1,
        explanation: "DELETE removes rows that satisfy the predicate."
    },
    // 140
    {
        q: "What this Query do: DELETE FROM Customers;",
        options: [
            "Drops the table",
            "Deletes all rows from Customers",
            "Deletes only one row",
            "Truncates and drops constraints"
        ],
        answer: 1,
        explanation: "DELETE without WHERE removes every row (but keeps the table)."
    },
    // 141
    {
        q: "What this Query do: DROP TABLE Customers;",
        options: [
            "Removes all rows but not structure",
            "Deletes the table definition and its data",
            "Disables the table",
            "Creates a new table"
        ],
        answer: 1,
        explanation: "DROP TABLE removes the object entirely."
    },
    // 142
    {
        q: "What this Query do: UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;",
        options: [
            "Inserts a new row",
            "Updates only rows with CustomerID = 1",
            "Updates all rows",
            "Deletes the row with CustomerID = 1"
        ],
        answer: 1,
        explanation: "UPDATE modifies matching row(s) per WHERE."
    },
    // 143
    {
        q: "What this Query do: UPDATE Customers SET ContactName='Juan' WHERE Country='Mexico';",
        options: [
            "Updates all rows",
            "Updates rows where Country = 'Mexico'",
            "Deletes rows where Country = 'Mexico'",
            "Creates column ContactName"
        ],
        answer: 1,
        explanation: "Only Mexican customers are updated."
    },
    // 144
    {
        q: "What this Query do: UPDATE Customers SET ContactName='Juan';",
        options: [
            "Updates no rows",
            "Updates all rows",
            "Inserts a row",
            "Drops the column"
        ],
        answer: 1,
        explanation: "No WHERE clause → all rows are updated."
    },
    // 145
    {
        q: "What this Query do: SELECT CustomerName, ContactName, Address FROM Customers WHERE Address IS NULL;",
        options: [
            "Returns rows where Address equals empty string",
            "Returns rows where Address is unknown/missing",
            "Returns all rows",
            "Deletes rows with NULL address"
        ],
        answer: 1,
        explanation: "IS NULL tests for missing values."
    },
    // 146
    {
        q: "What this Query do: SELECT CustomerName, ContactName, Address FROM Customers WHERE Address IS NOT NULL;",
        options: [
            "Returns only NULL addresses",
            "Returns rows where Address has a value",
            "Returns all rows",
            "Returns rows with empty strings only"
        ],
        answer: 1,
        explanation: "IS NOT NULL filters to present values (empty string ≠ NULL)."
    },
    // 147
    {
        q: "What this Query do: INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');",
        options: [
            "Updates matching row",
            "Inserts one new customer row with full details",
            "Inserts multiple rows",
            "Creates a new table"
        ],
        answer: 1,
        explanation: "INSERT INTO ... VALUES (...) adds a single row."
    },
    // 148
    {
        q: "What this Query do: INSERT INTO Customers (CustomerName, City, Country) VALUES ('Cardinal', 'Stavanger', 'Norway');",
        options: [
            "Fails because all columns are required",
            "Inserts a row; other columns get defaults/NULLs",
            "Updates existing 'Cardinal' row",
            "Creates a view"
        ],
        answer: 1,
        explanation: "Omitted columns take defaults or NULL depending on schema."
    },
    // 149
    {
        q: "What this Query do: INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'), ('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'), ('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');",
        options: [
            "Updates three rows",
            "Inserts three new rows",
            "Creates three new tables",
            "Deletes three rows"
        ],
        answer: 1,
        explanation: "Multi-values INSERT adds multiple rows in one statement."
    },
    // 150
    {
        q: "What this Query do: SELECT * FROM Customers WHERE NOT Country = 'Spain';",
        options: [
            "Selects only Spain",
            "Selects customers where Country ≠ 'Spain'",
            "Syntax error",
            "Deletes Spain customers"
        ],
        answer: 1,
        explanation: "NOT (Country = 'Spain') is equivalent to Country <> 'Spain'."
    },
    // 151
    {
        q: "What this Query do: SELECT * FROM Customers WHERE CustomerName NOT LIKE 'A%';",
        options: [
            "Name starts with 'A'",
            "Name does not start with 'A'",
            "Name equals 'A'",
            "Name ends with 'A'"
        ],
        answer: 1,
        explanation: "NOT LIKE negates the pattern."
    },
    // 152
    {
        q: "What this Query do: SELECT * FROM Customers WHERE CustomerID NOT BETWEEN 10 AND 60;",
        options: [
            "CustomerID between 10 and 60",
            "CustomerID <10 or >60",
            "CustomerID = 10 or 60 only",
            "CustomerID NULL only"
        ],
        answer: 1,
        explanation: "NOT BETWEEN selects values outside the inclusive range."
    },
    // 153
    {
        q: "What this Query do: SELECT * FROM Customers WHERE City NOT IN ('Paris', 'London');",
        options: [
            "Only Paris and London",
            "All cities except Paris and London",
            "Only NULL city",
            "Creates a city index"
        ],
        answer: 1,
        explanation: "NOT IN excludes the listed values."
    },
    // 154
    {
        q: "What this Query do: SELECT * FROM Customers WHERE NOT CustomerID > 50;",
        options: [
            "CustomerID >= 50",
            "CustomerID <= 50 (NULLs are not returned)",
            "CustomerID = 50 only",
            "All rows"
        ],
        answer: 1,
        explanation: "NOT (ID > 50) is equivalent to ID <= 50; NULL evaluates unknown → filtered out."
    },
    // 155
    {
        q: "What this Query do: SELECT * FROM Customers WHERE NOT CustomerId < 50;",
        options: [
            "CustomerID < 50",
            "CustomerID >= 50 (NULLs filtered)",
            "CustomerID = 50 only",
            "All rows"
        ],
        answer: 1,
        explanation: "NOT (ID < 50) ≡ ID >= 50; NULL remains unknown (filtered)."
    },
    // 156
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Germany' OR Country = 'Spain';",
        options: [
            "Both must be true",
            "Either Germany or Spain",
            "Only Spain",
            "Neither Germany nor Spain"
        ],
        answer: 1,
        explanation: "OR passes if either predicate is TRUE."
    },
    // 157
    {
        q: "What this Query do: SELECT * FROM Customers WHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Norway';",
        options: [
            "All three conditions must be true",
            "Any of the three conditions can be true",
            "Only Berlin and Norway together",
            "Only names starting with G"
        ],
        answer: 1,
        explanation: "OR of three predicates."
    },
    // 158
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');",
        options: [
            "Spain and name starts with G or R",
            "Spain or name starts with G or R",
            "Only name starts with R",
            "Only name starts with G"
        ],
        answer: 0,
        explanation: "Parentheses bind OR together with Spain via AND."
    },
    // 159
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';",
        options: [
            "Spain AND (G% OR R%)",
            "Spain AND G% OR R% (so also includes any R% regardless of country)",
            "Only Spain and R%",
            "Only Spain and G%"
        ],
        answer: 1,
        explanation: "AND has higher precedence than OR → (Spain AND G%) OR (R% anywhere)."
    },
    // 160
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%';",
        options: [
            "Only Spain",
            "Only names starting with G",
            "Spain with names starting with G",
            "Spain with names starting with R"
        ],
        answer: 2,
        explanation: "Both conditions must be true."
    },
    // 161
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Brazil' AND City = 'Rio de Janeiro' AND CustomerID > 50;",
        options: [
            "Brazil OR Rio OR ID>50",
            "Brazil AND Rio AND ID>50",
            "Only Rio customers",
            "Only ID>50 customers"
        ],
        answer: 1,
        explanation: "Conjunction of three predicates."
    },
    // 162 (same as 158)
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');",
        options: [
            "Spain and name starts with G or R",
            "Spain or name starts with G or R",
            "Only name starts with R",
            "Only name starts with G"
        ],
        answer: 0,
        explanation: "Same as #158; parentheses keep OR together with Spain via AND."
    },
    // 163 (same as 159)
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';",
        options: [
            "Spain AND (G% OR R%)",
            "Spain AND G% OR R% (so also includes any R% regardless of country)",
            "Only Spain and R%",
            "Only Spain and G%"
        ],
        answer: 1,
        explanation: "Operator precedence yields (Spain AND G%) OR (R% anywhere)."
    },
    // 164
    {
        q: "What this Query do: SELECT * FROM Products ORDER BY Price;",
        options: [
            "Sorts by price descending",
            "Sorts by price ascending (default)",
            "No sorting",
            "Groups by price"
        ],
        answer: 1,
        explanation: "ORDER BY defaults to ASC."
    },
    // 165
    {
        q: "What this Query do: SELECT * FROM Products ORDER BY Price DESC;",
        options: [
            "Sorts by price ascending",
            "Sorts by price descending",
            "Random order",
            "Groups by price"
        ],
        answer: 1,
        explanation: "DESC = descending."
    },
    // 166
    {
        q: "What this Query do: SELECT * FROM Products ORDER BY ProductName;",
        options: [
            "Sorts by ProductName ascending",
            "Sorts by ProductName descending",
            "No sorting",
            "Filters by ProductName"
        ],
        answer: 0,
        explanation: "Alphabetical A→Z unless DESC specified."
    },
    // 167
    {
        q: "What this Query do: SELECT * FROM Products ORDER BY ProductName DESC;",
        options: [
            "Sorts A→Z",
            "Sorts Z→A",
            "No sorting",
            "Filters by name"
        ],
        answer: 1,
        explanation: "DESC reverses order."
    },
    // 168
    {
        q: "What this Query do: SELECT * FROM Customers ORDER BY Country, CustomerName;",
        options: [
            "Sorts by CustomerName only",
            "Sorts by Country ASC, then CustomerName ASC",
            "Sorts by Country DESC",
            "Groups by Country"
        ],
        answer: 1,
        explanation: "Multi-key ascending by default."
    },
    // 169
    {
        q: "What this Query do: SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;",
        options: [
            "Country ASC and Name DESC within each country",
            "Both ASC",
            "Both DESC",
            "Random order"
        ],
        answer: 0,
        explanation: "Direction can be set per column."
    },
    // 170
    {
        q: "What this Query do: SELECT * FROM Customers WHERE Country='Mexico';",
        options: [
            "All customers",
            "Only customers from Mexico",
            "Only customers not from Mexico",
            "Creates an index"
        ],
        answer: 1,
        explanation: "Filters by equality."
    },
    // 171
    {
        q: "What this Query do: SELECT * FROM Customers WHERE CustomerID=1;",
        options: [
            "All IDs",
            "Only the row whose ID = 1",
            "IDs greater than 1",
            "Deletes ID 1"
        ],
        answer: 1,
        explanation: "Filters by exact match."
    },
    // 172
    {
        q: "What this Query do: SELECT * FROM Customers WHERE CustomerID > 80;",
        options: [
            "IDs ≥ 80",
            "IDs > 80",
            "IDs < 80",
            "All IDs"
        ],
        answer: 1,
        explanation: "Strictly greater than."
    },
    // 173
    {
        q: "What this Query do: SELECT DISTINCT Country FROM Customers;",
        options: [
            "All countries (with duplicates)",
            "Unique list of countries",
            "Countries sorted only",
            "Creates a view of countries"
        ],
        answer: 1,
        explanation: "DISTINCT removes duplicates."
    },
    // 174
    {
        q: "What this Query do: SELECT Country FROM Customers;",
        options: [
            "Unique list of countries",
            "Countries (may include duplicates)",
            "Sorted countries only",
            "Remaps country names"
        ],
        answer: 1,
        explanation: "No DISTINCT → duplicates allowed."
    },
    // 175
    {
        q: "What this Query do: SELECT CustomerName, City FROM Customers;",
        options: [
            "All columns",
            "Only CustomerName and City",
            "Only City",
            "Deletes other columns"
        ],
        answer: 1,
        explanation: "Selects specified columns."
    },
    // 176
    {
        q: "What this Query do: SELECT * FROM Customers;",
        options: [
            "No rows returned",
            "All rows and columns",
            "Only first row",
            "Drops table"
        ],
        answer: 1,
        explanation: "* selects all columns."
    },
    // 177
    {
        q: "What this Query do: DROP DATABASE testDB;",
        options: [
            "Drops one table",
            "Drops entire database (subject to privileges/locks)",
            "Backs up the database",
            "Creates database"
        ],
        answer: 1,
        explanation: "Removes DB and its objects per engine rules."
    },
    // 178
    {
        q: "What this Query do: CREATE TABLE Persons ( PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255) );",
        options: [
            "Inserts a row",
            "Creates a table schema",
            "Drops a table",
            "Creates a view"
        ],
        answer: 1,
        explanation: "DDL to create a new table."
    },
    // 179
    {
        q: "What this Query do: CREATE TABLE TestTable AS SELECT customername, contactname FROM customers;",
        options: [
            "Updates customers",
            "Creates a new table populated from a SELECT",
            "Creates a view",
            "Deletes rows from customers"
        ],
        answer: 1,
        explanation: "CTAS copies query result into a new physical table (dialect support varies)."
    },
    // 180
    {
        q: "What this Query do: DROP TABLE Shippers;",
        options: [
            "Deletes rows but keeps table",
            "Drops the table object",
            "Truncates table only",
            "Creates table"
        ],
        answer: 1,
        explanation: "DROP removes the table definition and data."
    },
    // 181
    {
        q: "What this Query do: ALTER TABLE Customers ADD Email varchar(255);",
        options: [
            "Adds a new row",
            "Adds a new column Email",
            "Drops column Email",
            "Renames table to Email"
        ],
        answer: 1,
        explanation: "ALTER TABLE … ADD COLUMN."
    },
    // 182
    {
        q: "What this Query do: ALTER TABLE Customers DROP COLUMN Email;",
        options: [
            "Drops the table",
            "Drops the Email column",
            "Adds Email column",
            "Deletes email rows"
        ],
        answer: 1,
        explanation: "Removes the column definition and its data."
    },
    // 183
    {
        q: "What this Query do: SELECT * INTO CustomersBackup2017 FROM Customers;",
        options: [
            "Appends rows into Customers",
            "Creates a new table CustomersBackup2017 from Customers (SQL Server/Access)",
            "Creates a view",
            "Updates CustomersBackup2017"
        ],
        answer: 1,
        explanation: "SELECT INTO creates a new table and copies data (dialect-specific)."
    },
    // 184
    {
        q: "What this Query do: SELECT * INTO CustomersGermany FROM Customers WHERE Country = 'Germany';",
        options: [
            "Deletes German customers",
            "Creates a new table with only German customers (SQL Server/Access)",
            "Creates a view of German customers",
            "Updates CustomersGermany"
        ],
        answer: 1,
        explanation: "Filtered SELECT INTO."
    },
    // 185
    {
        q: "What this Query do: SELECT SupplierName FROM Suppliers WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);",
        options: [
            "Suppliers with no products",
            "Suppliers with at least one product priced < 20",
            "All suppliers",
            "Only suppliers with products = NULL"
        ],
        answer: 1,
        explanation: "EXISTS is TRUE if the subquery returns at least one row."
    }
];

// --- Timer helpers (NEW) ---
function ensureTimePill() {
    if (!document.querySelector('#timePill')) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.id = 'timePill';
        pill.textContent = 'Time: ∞';
        const bar = document.querySelector('.toolbar');
        if (bar) bar.appendChild(pill);
    }
}
function formatTime(total) {
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
function updateTimePill() {
    ensureTimePill();
    const el = document.querySelector('#timePill');
    if (!el) return;
    if (!state.timeLimitEnabled) {
        el.textContent = 'Time: ∞';
    } else {
        el.textContent = `Time: ${formatTime(Math.max(0, state.remainingSeconds || 0))}`;
    }
}
function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
}
function startTimer(seconds) {
    stopTimer();
    state.timeLimitEnabled = !!seconds;
    state.remainingSeconds = seconds || 0;
    state.timedOut = false;
    updateTimePill();
    if (!state.timeLimitEnabled) return;
    state.timerId = setInterval(() => {
        state.remainingSeconds -= 1;
        updateTimePill();
        if (state.remainingSeconds <= 0) {
            stopTimer();
            state.timedOut = true;
            renderResult(); // end quiz when time is up
        }
    }, 1000);
}

const state = {
    quiz: [],            // current quiz questions
    total: 0,            // number of questions selected
    idx: 0,              // current index
    score: 0,            // total score
    answered: false,     // whether current question answered
    userAnswers: [],     // chosen indices per question
    streak: 0,
    difficulty: 'easy',  // 'easy' | 'advanced'
    timeLimitEnabled: false,
    remainingSeconds: 0,
    timerId: null,
    timedOut: false
};

const $ = s => document.querySelector(s);

// Shuffle options for a single question and remap the correct answer index
function shuffleOptionsForQuestion(q) {
    const order = shuffle([...Array(q.options.length).keys()]); // [0,1,2,3] -> shuffled
    return {
        ...q,
        options: order.map(i => q.options[i]),
        answer: order.indexOf(q.answer) // new index of the previously correct option
    };
}

function shuffle(arr) {
    // Fisher–Yates
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function pickN(arr, n) { return shuffle(arr).slice(0, n); }

function setPills() {
    $('#progressPill').textContent = `${state.idx} / ${state.total}`;
    $('#scorePill').textContent = `Score: ${state.score}`;
    $('#streakPill').textContent = `Streak: ${state.streak}🔥`;
    updateTimePill(); // keep time pill in sync
}

// ---------- Screens ----------
function renderStart() {
    // ensure difficulty exists
    if (!('difficulty' in state)) state.difficulty = 'easy';

    // timer options in minutes -> seconds (0 = no limit)
    const timePresets = [
        { label: 'No limit', sec: 0 },
        { label: '5 min', sec: 5 * 60 },
        { label: '10 min', sec: 10 * 60 },
        { label: '15 min', sec: 15 * 60 },
        { label: '30 min', sec: 30 * 60 },
        { label: '60 min', sec: 60 * 60 },
    ];

    const baseLengths = [10, 20, 30];
    let selectedLen = null;
    let selectedSec = 0; // default: no limit

    // compute allowed lengths for currently selected difficulty
    const allowedLengths = () => {
        const max = getActiveBank().length;
        return baseLengths.map(n => Math.min(n, max)).filter(n => n > 0);
    };

    const renderLengthsButtons = () =>
        allowedLengths().map(n => `<button class="chip" data-len="${n}">${n} Questions</button>`).join('');

    const html = `
<section class="start">
  <h2>Practice SQL MCQs</h2>
  <p>Choose difficulty and how many questions you want to practice.</p>

  <div class="lengths" id="diffs" style="margin-bottom:6px">
    <button class="chip" data-diff="easy" ${state.difficulty === 'easy' ? 'data-selected="true"' : ''}>Easy</button>
    <button class="chip" data-diff="advanced" ${state.difficulty === 'advanced' ? 'data-selected="true"' : ''}>Advanced</button>
  </div>

  <div class="lengths" id="lengths">
    ${renderLengthsButtons()}
  </div>

  <p style="margin:12px 0 6px; color:var(--muted)">Time limit</p>
  <div class="lengths" id="times">
    ${timePresets.map((t, i) => `<button class="chip" data-sec="${t.sec}" ${i === 0 ? 'data-selected="true"' : ''}>${t.label}</button>`).join('')}
  </div>

  <div>
    <button class="btn" id="startBtn" disabled>Start Quiz</button>
  </div>

  <div style="margin-top:8px; color:var(--muted); font-size:12px;">
    Tip: Use <span class="kbd">A</span>/<span class="kbd">B</span>/<span class="kbd">C</span>/<span class="kbd">D</span> to answer,
    <span class="kbd">Enter</span> to submit/next, and <span class="kbd">N</span> for Next.
  </div>
</section>
`;
    $('#screen').innerHTML = html;

    const lengthsEl = $('#lengths');

    // wire up length buttons
    function wireLengthClicks() {
        lengthsEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.chip');
            if (!btn) return;
            [...lengthsEl.querySelectorAll('.chip')].forEach(x => x.dataset.selected = "false");
            btn.dataset.selected = "true";
            selectedLen = parseInt(btn.dataset.len, 10);
            $('#startBtn').disabled = false;
        }, { once: true }); // re-wired each time we re-render the buttons
    }
    wireLengthClicks();

    // difficulty switch -> refresh lengths
    $('#diffs').addEventListener('click', (e) => {
        const b = e.target.closest('.chip');
        if (!b) return;
        [...document.querySelectorAll('#diffs .chip')].forEach(x => x.dataset.selected = "false");
        b.dataset.selected = "true";
        state.difficulty = b.dataset.diff;

        selectedLen = null;
        $('#startBtn').disabled = true;
        lengthsEl.innerHTML = renderLengthsButtons();
        wireLengthClicks();
    });

    // time preset
    $('#times').addEventListener('click', (e) => {
        const btn = e.target.closest('.chip');
        if (!btn) return;
        [...document.querySelectorAll('#times .chip')].forEach(x => x.dataset.selected = "false");
        btn.dataset.selected = "true";
        selectedSec = parseInt(btn.dataset.sec, 10);
    });

    $('#startBtn').addEventListener('click', () => startQuiz(selectedLen, selectedSec));

    // Initialize pills & timer
    state.idx = 0; state.total = 0; state.score = 0; state.streak = 0;
    stopTimer();
    state.timeLimitEnabled = false; state.remainingSeconds = 0; state.timedOut = false;
    ensureTimePill(); setPills();
}

function getActiveBank() {
    // Pick the current question bank based on selected difficulty
    const easy = (typeof EASY_BANK !== 'undefined') ? EASY_BANK : [];
    const adv = (typeof ADV_BANK !== 'undefined') ? ADV_BANK : [];
    return (state.difficulty === 'advanced') ? adv : easy;
}

function setPills() {
    $('#progressPill').textContent = `${state.idx} / ${state.total}`;
    $('#scorePill').textContent = `Score: ${state.score}`;
    $('#streakPill').textContent = `Streak: ${state.streak}🔥`;
}

function getActiveBank() {
    const easy = (typeof EASY_BANK !== 'undefined') ? EASY_BANK
        : (typeof QUESTION_BANK !== 'undefined') ? QUESTION_BANK : [];
    const adv = (typeof ADV_BANK !== 'undefined') ? ADV_BANK : [];
    return (state.difficulty === 'advanced') ? adv : easy;
}
const VALID_PASSWORDS = new Set(['SQL-practice21', 'nutan', 'ankitN']);

function startQuiz(n, seconds) {
    const pwd = (prompt('Enter Password') || '').trim();
    if (!VALID_PASSWORDS.has(pwd)) {
        alert('Incorrect password');
        return; // stop if wrong or cancelled
    }

    const bank = getActiveBank();
    const count = Math.min((n || 10), bank.length);

    // pick questions, THEN shuffle the options for each
    const picked = pickN(bank, count);
    state.quiz = picked.map(shuffleOptionsForQuestion);

    state.total = state.quiz.length;
    state.idx = 0;
    state.score = 0;
    state.userAnswers = [];
    state.streak = 0;

    startTimer(seconds); // start / reset timer
    setPills();
    renderQuestion();
}

function renderQuestion() {
    const q = state.quiz[state.idx];
    const progress = Math.round((state.idx / state.total) * 100);
    const html = `
<div class="progress"><div style="width:${progress}%"></div></div>
<article class="question-card">
  <div class="q-head">
    <div class="q-index">Question ${state.idx + 1} of ${state.total}</div>
    <div class="score-pill">Current Score: ${state.score}</div>
  </div>
  <div class="q-body">${q.q}</div>
  <div class="options" id="opts">
    ${q.options.map((opt, i) =>
        `<label class="option"><input type="radio" name="opt" value="${i}" /> <span>${['A', 'B', 'C', 'D'][i]}. ${opt}</span></label>`
    ).join('')}
  </div>
  <div class="explain" id="explain" style="display:none"></div>
</article>
<div class="footer">
  <div style="display:flex; gap:8px; align-items:center">
    <span class="score-pill">Use keys: <span class="kbd">A</span><span class="kbd">B</span><span class="kbd">C</span><span class="kbd">D</span> · Enter submits/next · <span class="kbd">N</span> for Next</span>
  </div>
  <div style="display:flex; gap:10px">
    <button class="btn" id="nextBtn" disabled>Next</button>
  </div>
</div>
`;
    $('#screen').innerHTML = html;
    state.answered = false; setPills();

    $('#opts').addEventListener('change', (e) => {
        if (state.answered) return;
        const choice = parseInt(e.target.value, 10);
        grade(choice);
    });
    $('#nextBtn').addEventListener('click', next);

    // Keyboard shortcuts
    window.onkeydown = (ev) => {
        const k = ev.key.toLowerCase();
        const map = { a: 0, b: 1, c: 2, d: 3 };
        if (map.hasOwnProperty(k)) {
            const input = document.querySelector(`input[name=opt][value='${map[k]}']`);
            if (input && !state.answered) { input.checked = true; grade(map[k]); }
        } else if (k === 'enter' || k === 'return' || ev.code === 'NumpadEnter') {
            ev.preventDefault();
            const selected = document.querySelector("input[name=opt]:checked");
            if (!state.answered) {
                if (selected) grade(parseInt(selected.value, 10));
            } else {
                next();
            }
        } else if (k === 'n') {
            next();
        }
    };
}


function grade(choice) {
    const q = state.quiz[state.idx];
    const labels = [...document.querySelectorAll('.option')];
    state.answered = true;
    state.userAnswers[state.idx] = choice;
    const correct = q.answer;
    labels.forEach((lbl, i) => {
        lbl.classList.remove('correct', 'wrong');
        if (i === correct) lbl.classList.add('correct');
        if (i === choice && choice !== correct) lbl.classList.add('wrong');
        lbl.querySelector('input').disabled = true;
    });
    if (choice === correct) { state.score += 1; state.streak += 1; }
    else { state.streak = 0; }
    setPills();
    const exp = $('#explain');
    exp.style.display = 'block';
    exp.textContent = q.explanation || '';
    $('#nextBtn').disabled = false;
}

function next() {
    if (!state.answered) return;
    if (state.idx < state.total - 1) {
        state.idx += 1; setPills(); renderQuestion();
    } else {
        renderResult();
    }
}

function renderResult() {
    // stop any running timer
    stopTimer();
    updateTimePill();

    const percent = Math.round((state.score / state.total) * 100);
    const hiKey = 'sql_mcq_highscore';
    const prev = parseInt(localStorage.getItem(hiKey) || '0', 10);
    const newHi = Math.max(prev, state.score);
    localStorage.setItem(hiKey, String(newHi));

    const breakdown = state.quiz.map((q, i) => {
        const u = state.userAnswers[i];
        const ok = u === q.answer;
        return `
<details ${ok ? '' : 'open'}>
  <summary>${ok ? '✅' : '❌'} Q${i + 1}: ${q.q}</summary>
  <div style="margin:8px 0 0 0">
    <div><strong>Your answer:</strong> ${u != null ? ['A', 'B', 'C', 'D'][u] + '. ' + q.options[u] : '—'}</div>
    <div><strong>Correct answer:</strong> ${['A', 'B', 'C', 'D'][q.answer]}. ${q.options[q.answer]}</div>
    <div style="margin-top:6px; color:var(--muted)">${q.explanation || ''}</div>
  </div>
</details>`;
    }).join('');

    const timedOutBanner = state.timedOut
        ? `<div class="question-card" style="text-align:center; color:var(--warning)"><strong>⏰ Time's up!</strong> The quiz ended when the timer reached zero.</div>`
        : '';

    const html = `
<section class="result">
  ${timedOutBanner}
  <div class="big-score">${state.score} / ${state.total} (${percent}%)</div>
  <div class="grid">
    <div class="question-card">
      <div><strong>High score (this browser):</strong> ${newHi}</div>
      <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap">
        <button class="btn" id="retrySame">Retry Same Set</button>
        <button class="btn" id="newSet">New Set</button>
      </div>
    </div>
    <div class="question-card">
      <div style="font-weight:700; margin-bottom:8px">Performance Tips</div>
      <ul style="margin:0; padding-left:18px; color:var(--muted); line-height:1.6">
        <li>Re-read explanations for every miss and note the key term (e.g., <em>HAVING vs WHERE</em>).</li>
        <li>Practice 10 quick questions daily; ramp to 20/30 on weekends.</li>
        <li>Mix topics: joins, aggregation, indexing, transactions, window functions.</li>
      </ul>
    </div>
  </div>
  <div class="review">
    <h3>Review Answers</h3>
    ${breakdown}
  </div>
</section>
`;
    $('#screen').innerHTML = html;
    $('#retrySame').onclick = () => {
        state.quiz = state.quiz.map(shuffleOptionsForQuestion); // re-shuffle options on retry
        state.idx = 0; state.score = 0; state.userAnswers = []; state.streak = 0;
        setPills(); renderQuestion();
    };
    $('#newSet').onclick = () => renderStart();
    $('#progressPill').textContent = `${state.total} / ${state.total}`;
    $('#scorePill').textContent = `Score: ${state.score}`;
}

renderStart();
