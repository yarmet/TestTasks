<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<html>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<head>
    <title>Test task Khamedov</title>
    <link href="${contextPath}/res/css/bootstrap.min.css" rel="stylesheet">
    <link href="${contextPath}/res/css/index.css" rel="stylesheet">
</head>

<body>

<div style="display: none">
    <div id="rootPath">${contextPath}</div>
</div>

<section class="container">
    <div id="root"></div>
</section>

<script type="text/javascript" src="${contextPath}/res/js/main.0b06080e.js"></script>

</body>


</html>