var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1007",
        "ok": "1007",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles1": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles2": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "percentiles3": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles4": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "group1": {
    "name": "t < 200 ms",
    "count": 12635,
    "percentage": 51
},
    "group2": {
    "name": "200 ms < t < 400 ms",
    "count": 11116,
    "percentage": 44
},
    "group3": {
    "name": "t > 400 ms",
    "count": 1249,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "225.225",
        "ok": "225.225",
        "ko": "-"
    }
},
contents: {
"req_search-query-eb918": {
        type: "REQUEST",
        name: "Search Query",
path: "Search Query",
pathFormatted: "req_search-query-eb918",
stats: {
    "name": "Search Query",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1007",
        "ok": "1007",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles1": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles2": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "percentiles3": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles4": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "group1": {
    "name": "t < 200 ms",
    "count": 12635,
    "percentage": 51
},
    "group2": {
    "name": "200 ms < t < 400 ms",
    "count": 11116,
    "percentage": 44
},
    "group3": {
    "name": "t > 400 ms",
    "count": 1249,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "225.225",
        "ok": "225.225",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
