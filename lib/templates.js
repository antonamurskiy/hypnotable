// Generated by CoffeeScript 1.6.2
(function() {
  var hogan, row, table;

  hogan = require('hogan.js');

  table = "    <table>            <thead>        <tr>          {{#columns}}            <th class='{{property}}'>              {{title}}            </th>          {{/columns}}        </tr>      </thead>      <tbody></tbody>    </table>      ";

  row = "    <tr>      {{#cells}}        <td data-value='{{serialized}}', class='{{className}}'>          {{text}}        </td>      {{/cells}}    </tr>  ";

  module.exports = {
    table: hogan.compile(table),
    row: hogan.compile(row)
  };

}).call(this);