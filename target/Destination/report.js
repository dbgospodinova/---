$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("65-sum-possitive-integers.feature");
formatter.feature({
  "line": 1,
  "name": "Sum possitive integers",
  "description": "",
  "id": "sum-possitive-integers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Two possitive integers",
  "description": "",
  "id": "sum-possitive-integers;two-possitive-integers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@COM-2"
    },
    {
      "line": 4,
      "name": "@OPEN"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "two numbers: \u0027\u003cfirst\u003e\u0027, \u0027\u003csecond\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Their sum should be \u0027\u003cresult\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sum-possitive-integers;two-possitive-integers;",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "result"
      ],
      "line": 11,
      "id": "sum-possitive-integers;two-possitive-integers;;1"
    },
    {
      "cells": [
        "12",
        "18",
        "30"
      ],
      "line": 12,
      "id": "sum-possitive-integers;two-possitive-integers;;2"
    },
    {
      "cells": [
        "20",
        "5",
        "25"
      ],
      "line": 13,
      "id": "sum-possitive-integers;two-possitive-integers;;3"
    },
    {
      "cells": [
        "12",
        "5",
        "17"
      ],
      "line": 14,
      "id": "sum-possitive-integers;two-possitive-integers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Two possitive integers",
  "description": "",
  "id": "sum-possitive-integers;two-possitive-integers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@OPEN"
    },
    {
      "line": 4,
      "name": "@COM-2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "two numbers: \u002712\u0027, \u002718\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Their sum should be \u002730\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 14
    },
    {
      "val": "18",
      "offset": 20
    }
  ],
  "location": "CommonsMath.two_positive_numbers_first_number_second_number(int,int)"
});
formatter.result({
  "duration": 130096449,
  "status": "passed"
});
formatter.match({
  "location": "CommonsMath.i_sum_them()"
});
formatter.result({
  "duration": 42115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 21
    }
  ],
  "location": "CommonsMath.their_sum_should_be_sum(int)"
});
formatter.result({
  "duration": 341518,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Two possitive integers",
  "description": "",
  "id": "sum-possitive-integers;two-possitive-integers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@OPEN"
    },
    {
      "line": 4,
      "name": "@COM-2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "two numbers: \u002720\u0027, \u00275\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Their sum should be \u002725\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "CommonsMath.two_positive_numbers_first_number_second_number(int,int)"
});
formatter.result({
  "duration": 261536,
  "status": "passed"
});
formatter.match({
  "location": "CommonsMath.i_sum_them()"
});
formatter.result({
  "duration": 28312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 21
    }
  ],
  "location": "CommonsMath.their_sum_should_be_sum(int)"
});
formatter.result({
  "duration": 191463,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Two possitive integers",
  "description": "",
  "id": "sum-possitive-integers;two-possitive-integers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@OPEN"
    },
    {
      "line": 4,
      "name": "@COM-2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "two numbers: \u002712\u0027, \u00275\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Their sum should be \u002717\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "CommonsMath.two_positive_numbers_first_number_second_number(int,int)"
});
formatter.result({
  "duration": 322053,
  "status": "passed"
});
formatter.match({
  "location": "CommonsMath.i_sum_them()"
});
formatter.result({
  "duration": 22296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 21
    }
  ],
  "location": "CommonsMath.their_sum_should_be_sum(int)"
});
formatter.result({
  "duration": 330548,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Three possitive integers",
  "description": "",
  "id": "sum-possitive-integers;three-possitive-integers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@COM-2"
    },
    {
      "line": 19,
      "name": "@OPEN"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "three numbers: \u0027\u003cfirst\u003e\u0027, \u0027\u003csecond\u003e\u0027, \u0027\u003cthird\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Their sum should be \u0027\u003cresult\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "sum-possitive-integers;three-possitive-integers;",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "third",
        "result"
      ],
      "line": 26,
      "id": "sum-possitive-integers;three-possitive-integers;;1"
    },
    {
      "cells": [
        "12",
        "18",
        "30",
        "60"
      ],
      "line": 27,
      "id": "sum-possitive-integers;three-possitive-integers;;2"
    },
    {
      "cells": [
        "20",
        "5",
        "25",
        "50"
      ],
      "line": 28,
      "id": "sum-possitive-integers;three-possitive-integers;;3"
    },
    {
      "cells": [
        "12",
        "5",
        "17",
        "34"
      ],
      "line": 29,
      "id": "sum-possitive-integers;three-possitive-integers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Three possitive integers",
  "description": "",
  "id": "sum-possitive-integers;three-possitive-integers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@OPEN"
    },
    {
      "line": 19,
      "name": "@COM-2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "three numbers: \u002712\u0027, \u002718\u0027, \u002730\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Their sum should be \u002760\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 16
    },
    {
      "val": "18",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "CommonsMath.three_numbers(int,int,int)"
});
formatter.result({
  "duration": 716304,
  "status": "passed"
});
formatter.match({
  "location": "CommonsMath.i_sum_them()"
});
formatter.result({
  "duration": 21942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 21
    }
  ],
  "location": "CommonsMath.their_sum_should_be_sum(int)"
});
formatter.result({
  "duration": 138023,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Three possitive integers",
  "description": "",
  "id": "sum-possitive-integers;three-possitive-integers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@OPEN"
    },
    {
      "line": 19,
      "name": "@COM-2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "three numbers: \u002720\u0027, \u00275\u0027, \u002725\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Their sum should be \u002750\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "25",
      "offset": 27
    }
  ],
  "location": "CommonsMath.three_numbers(int,int,int)"
});
formatter.result({
  "duration": 686575,
  "status": "passed"
});
formatter.match({
  "location": "CommonsMath.i_sum_them()"
});
formatter.result({
  "duration": 24773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 21
    }
  ],
  "location": "CommonsMath.their_sum_should_be_sum(int)"
});
formatter.result({
  "duration": 148994,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Three possitive integers",
  "description": "",
  "id": "sum-possitive-integers;three-possitive-integers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@OPEN"
    },
    {
      "line": 19,
      "name": "@COM-2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "three numbers: \u002712\u0027, \u00275\u0027, \u002717\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Their sum should be \u002734\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "17",
      "offset": 27
    }
  ],
  "location": "CommonsMath.three_numbers(int,int,int)"
});
formatter.result({
  "duration": 1369612,
  "status": "passed"
});
formatter.match({
  "location": "CommonsMath.i_sum_them()"
});
formatter.result({
  "duration": 40346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 21
    }
  ],
  "location": "CommonsMath.their_sum_should_be_sum(int)"
});
formatter.result({
  "duration": 787085,
  "status": "passed"
});
});