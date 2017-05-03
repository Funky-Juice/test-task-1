'use strict';

var utils = require('./utils');
var createRowBtn = require('./row-btn');
var editField = require('./edit-field');

// шаблон таблицы
var templateTable = function(data) {
  return '<table class="table">' +
    '<tr>' +
    '<th>ID</th>' +
    '<th>Имя</th>' +
    '<th>Логин</th>' +
    '<th>Электронная почта</th>' +
    '<th>Дата регистрации</th>' +
    '</tr>' +

    data.users.map(function(users) {
      return '<tr>' +
        '<td>' + users.id + '</td>' +
        '<td>' + users.name + '</td>' +
        '<td>' + users.login + '</td>' +
        '<td class="editable">' + users['e-mail'] + '</td>' +
        '<td>' + utils.formatDate(users.created) + '</td>' +
        '</tr>'
    }).join('')

  '</table>'
};

// добавление таблицы в разметку
var renderTable = function(data) {
  var tableContainer = document.getElementById('app');
  tableContainer.insertAdjacentHTML('beforeend', templateTable(data));

  // добавление кнопки
  createRowBtn();

  // редактирование поля
  editField();
};

module.exports = renderTable;
