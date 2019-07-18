Copyright (c) 2019 Kenson G.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Developer: Kenson G.
webiste: kensongilles.com
Description: Google Spreadsheet simple API
******************************************************************************/

// Fetch Spreadsheet data using UrlFetch
function fetch(spreadsheet_id, sheet_name, heading_row, token) {

  var header = {"Authorization":"Bearer " + token};
  var options = {
    "method":"GET",
    "headers": header,
    "muteHttpExceptions": true
  }
  
  var url = PROD_URL_ + "?type=default&action=read&ssid=" + spreadsheet_id + "&sname=" + sheet_name + "&hrow=" + heading_row;
  var response = UrlFetchApp.fetch(url, options);
  
  return response;
}

// Get Data without using UrlFetch
function get(spreadsheet_id, sheet_name, heading_row_number) {
  var ssid = spreadsheet_id;
  var sname = sheet_name;
  var hrow = heading_row_number;
  
  return generator_(ssid, sname, hrow);
}
