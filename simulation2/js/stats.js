var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4900",
        "ok": "4900",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles1": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "percentiles2": {
        "total": "460",
        "ok": "460",
        "ko": "-"
    },
    "percentiles3": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1429",
        "ok": "1429",
        "ko": "-"
    },
    "group1": {
    "name": "t < 200 ms",
    "count": 7831,
    "percentage": 16
},
    "group2": {
    "name": "200 ms < t < 400 ms",
    "count": 25188,
    "percentage": 50
},
    "group3": {
    "name": "t > 400 ms",
    "count": 16981,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "248.756",
        "ok": "248.756",
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
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4900",
        "ok": "4900",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles1": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "percentiles2": {
        "total": "460",
        "ok": "460",
        "ko": "-"
    },
    "percentiles3": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1429",
        "ok": "1429",
        "ko": "-"
    },
    "group1": {
    "name": "t < 200 ms",
    "count": 7831,
    "percentage": 16
},
    "group2": {
    "name": "200 ms < t < 400 ms",
    "count": 25188,
    "percentage": 50
},
    "group3": {
    "name": "t > 400 ms",
    "count": 16981,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "248.756",
        "ok": "248.756",
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
