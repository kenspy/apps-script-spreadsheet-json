# Apps Script Spreadsheet to JSON

## Introduction
Easily transform your Google Spreadsheet data into JSON, and display the data to your web application. Share sheet data without sharing nor exposing your Spreadsheet, all data will be retrieved as user executing the script.

## Library ID
You can test the library using the project ID.
`1fIrxOBnrIap0pGn9a01BHNus06OJDPGWFgwq3TFbfGJM8BZb_n_Ph1b7`

## Methods
#### fetch()
The `fetch()` function will display the data as you, there is no need to share your Spreadhseet. Function uses the UrlFetchApp to retreive the data as the user running the script. The token is required, else the function will fail for everyone else.
```
# Fetch function
function fetch(spreadsheet_id, sheet_name, heading_row, token) {

  ...

  var response = UrlFetchApp.fetch(url, options);
  return response;
}
```

```
# Display data using fetch
function demoFetch() {
  return fetch('1abcdefghijklmnopqrstuv', '', '', token);
}
```

#### get()
The `get()` function display the data only to the users who have access to the spreasheet.
```
# Get function
function get(spreadsheet_id, sheet_name, heading_row) {
  ...
}
```

```
# Display data using get
function demoGet() {
  return get('1abcdefghijklmnopqrstuv', '', '');
}
```

## Parameters
#### spreadsheet_id 
The Spreadsheet ID is required in order to generate the data. It looks something like this `1abcdefghijklmnopqrstuv`.
```
function demoFetch() {
  return fetch('1abcdefghijklmnopqrstuv', '', '', token);
}
```
```
function demoGet() {
  return get('1abcdefghijklmnopqrstuv', '', '');
}
```

#### sheet_name
The sheet name is the tab containing the data you would like to display. In the absence of a sheet name the active tab is used instead, replace `sheet_name` with `''`.
```
function demoFetch() {
  return fetch('1abcdefghijklmnopqrstuv', Sheet1, '', token);
}
```
```
function demoGet() {
  return get('1abcdefghijklmnopqrstuv', '', '');
}
```

#### heading_row
Not every Spreadsheet header starts on the first row, you can always tell the script on which row your headers are located. n the absence of a header row number the first row `0` is used instead, replace `heading_row` with `''`.
```
function demoFetch() {
  return fetch('1abcdefghijklmnopqrstuv', '', 0, token);
}
```
```
function demoGet() {
  return get('1abcdefghijklmnopqrstuv', '', '');
}
```

#### token
The Google OAuth 2.0 token is required to allow users to view the data as you.
`ScriptApp.getOAuthToken()`

```
function demoFetch() {
  return fetch('1abcdefghijklmnopqrstuv', '', 0, ScriptApp.getOAuthToken());
}
```
