let comments = [
    {
        "value": "1st comment",
        "id": 1,
        "pid": "root",
        "children": [
            {
                "value": "1st comment 1st__reply",
                "id": 6,
                "pid": 1,
                "children": [
                    {
                        "value": "1st comment 1st__1st_eply",
                        "id": 8,
                        "pid": 6,
                        "children": [
                            {
                                "value": "1st comment 1st__2nd reply",
                                "id": 10,
                                "pid": 8
                            },
                            {
                                "value": "1st comment 1st__2nd reply",
                                "id": 11,
                                "pid": 8,
                                "children": [
                                    {
                                        "value": "1st comment 2nd_1st reply",
                                        "id": 14,
                                        "pid": 11
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "value": "1st comment 2nd__reply",
                "id": 7,
                "pid": 1,
                "children": [
                    {
                        "value": "1st comment 2nd_1st__reply",
                        "id": 9,
                        "pid": 7,
                        "children": [
                            {
                                "value": "1st comment 2nd_1st reply",
                                "id": 12,
                                "pid": 9
                            },
                            {
                                "value": "1st comment 2nd_1st reply",
                                "id": 13,
                                "pid": 9
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "value": "2nd comment",
        "id": 3,
        "pid": "root",
        "children": []
    }
];

/**
 * Struct
 *  "value": "1st comment",
    "id": 1,
    "pid": "root",
    "children":[
        {
            "value": "1st comment",
            "id": 1,
            "pid": "8",
            "children":[]
        }]
 */