<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<html>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<head>
    <title>Test task Khamedov Ruslan</title>
</head>


<style>
    h3 {
        text-align: center;
    }

    table {
        margin: auto;
        border-collapse: collapse;
    }

    table td {
        border: 1px solid black;
        padding: 10px;
    }
</style>


<body>

<h3>список студентов с средней оценкой 4.6 и выше </h3>

<table id="table">

    <thead>
    <tr>
        <th>id</th>
        <th>имя</th>

        <th>экзамен</th>
        <th>оценка</th>

        <th>экзамен</th>
        <th>оценка</th>

        <th>оценка</th>
        <th>экзамен</th>

    </tr>
    </thead>

    <tbody>
    </tbody>
</table>


<span id="errorBlock"></span>


<script>

    var tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/effective_students", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {

            var array = JSON.parse(this.response);

            array.forEach(function (t, id) {
                var row = tableBody.insertRow(id);

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                cell1.innerHTML = t.id;
                cell2.innerHTML = t.name;

                var examresults = t.examResults;

                 examresults.forEach(function (t2) {
                     var cell3 = row.insertCell(2);
                     var cell4 = row.insertCell(3);
                     cell3.innerHTML = t2.examName;
                     cell4.innerHTML = t2.ratio;
                 })

            });

        } else {
            document.getElementById('errorBlock').innerText = this.status + " " + this.responseText;
        }
    };

</script>

</body>


</html>