define({ "api": [
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/:issueId/view",
    "title": "api for getting single issue detail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of issue to view. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"title\": \"Problematic Issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:17:35.000Z\",\n    \"issueId\": \"1dyo5BzcF\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:38:34.000Z\",\n    \"issueId\": \"TjJfaarhC\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue 11\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T20:25:53.000Z\",\n    \"issueId\": \"MKQoxg_7j\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:35.000Z\",\n    \"issueId\": \"iCAtvMPsR\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:41.000Z\",\n    \"issueId\": \"hcxhZCkhm\",\n    \"assignee\": [],\n    \"watchers\": []\n}\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueIssueidView"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/search/result",
    "title": "api for searching issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "searchText",
            "description": "<p>search string input by user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"search result\",\n\"status\": 200,\n\"data\":[\n    \n     \"title\": \"Problematic Issue\",\n     \"description\": \"This is a description of schematic isssue\",\n     \"status\": \"in-progress\",\n     \"createdOn\": \"2020-07-26T15:17:35.000Z\",\n     \"issueId\": \"1dyo5BzcF\",\n     \"assignee\": [],\n     \"watchers\": []\n },\n {\n     \"title\": \"Further issue\",\n     \"description\": \"This is a description of schematic isssue\",\n     \"status\": \"in-progress\",\n     \"createdOn\": \"2020-07-26T15:38:34.000Z\",\n     \"issueId\": \"TjJfaarhC\",\n     \"assignee\": [],\n     \"watchers\": []\n },\n {\n     \"title\": \"Further issue 11\",\n     \"description\": \"This is a description of schematic isssue\",\n     \"status\": \"in-progress\",\n     \"createdOn\": \"2020-07-26T20:25:53.000Z\",\n     \"issueId\": \"MKQoxg_7j\",\n     \"assignee\": [],\n     \"watchers\": []\n },\n {\n     \"title\": \"Further issuesssssss\",\n     \"description\": \"This is a description of further issue\",\n     \"status\": \"In-Progress\",\n     \"createdOn\": \"2020-07-27T10:07:35.000Z\",\n     \"issueId\": \"iCAtvMPsR\",\n     \"assignee\": [],\n     \"watchers\": []\n }\n\n]\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueSearchResult"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/:userId/reported/issues",
    "title": "api for getting issues reported by user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>number of data to skip for pagination. (query) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"reported issues of user\",\n\"status\": 200,\n\"data\": [\n    {\n    \"title\": \"Problematic Issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:17:35.000Z\",\n    \"issueId\": \"1dyo5BzcF\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:38:34.000Z\",\n    \"issueId\": \"TjJfaarhC\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue 11\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T20:25:53.000Z\",\n    \"issueId\": \"MKQoxg_7j\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:35.000Z\",\n    \"issueId\": \"iCAtvMPsR\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:41.000Z\",\n    \"issueId\": \"hcxhZCkhm\",\n    \"assignee\": [],\n    \"watchers\": []\n}\n\n        ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueUseridReportedIssues"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/:userId/view/all",
    "title": "api for getting issues assigned to user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>number of data to skip for pagination. (query) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"issue found for userId\",\n\"status\": 200,\n\"data\": [\n    {\n    \"title\": \"Problematic Issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:17:35.000Z\",\n    \"issueId\": \"1dyo5BzcF\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:38:34.000Z\",\n    \"issueId\": \"TjJfaarhC\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue 11\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T20:25:53.000Z\",\n    \"issueId\": \"MKQoxg_7j\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:35.000Z\",\n    \"issueId\": \"iCAtvMPsR\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:41.000Z\",\n    \"issueId\": \"hcxhZCkhm\",\n    \"assignee\": [],\n    \"watchers\": []\n}\n    \n        ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueUseridViewAll"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/view/all",
    "title": "api for getting all issues.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>number of data to skip for pagination. (query) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"All issues details found\",\n\"status\": 200,\n\"data\": [\n    {\n    \"title\": \"Problematic Issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:17:35.000Z\",\n    \"issueId\": \"1dyo5BzcF\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:38:34.000Z\",\n    \"issueId\": \"TjJfaarhC\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue 11\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T20:25:53.000Z\",\n    \"issueId\": \"MKQoxg_7j\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:35.000Z\",\n    \"issueId\": \"iCAtvMPsR\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:41.000Z\",\n    \"issueId\": \"hcxhZCkhm\",\n    \"assignee\": [],\n    \"watchers\": []\n}\n        ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueViewAll"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/comment/create",
    "title": "api for adding comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of issue to which comment is added to. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>comment commented by user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"issue found for userId\",\n\"status\": 200,\n\"data\": [\n    {\n    \"title\": \"Problematic Issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:17:35.000Z\",\n    \"issueId\": \"1dyo5BzcF\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T15:38:34.000Z\",\n    \"issueId\": \"TjJfaarhC\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issue 11\",\n    \"description\": \"This is a description of schematic isssue\",\n    \"status\": \"in-progress\",\n    \"createdOn\": \"2020-07-26T20:25:53.000Z\",\n    \"issueId\": \"MKQoxg_7j\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:35.000Z\",\n    \"issueId\": \"iCAtvMPsR\",\n    \"assignee\": [],\n    \"watchers\": []\n},\n{\n    \"title\": \"Further issuesssssss\",\n    \"description\": \"This is a description of further issue\",\n    \"status\": \"In-Progress\",\n    \"createdOn\": \"2020-07-27T10:07:41.000Z\",\n    \"issueId\": \"hcxhZCkhm\",\n    \"assignee\": [],\n    \"watchers\": []\n}\n         \n        ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueCommentCreate"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/create",
    "title": "api for creating new issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterId",
            "description": "<p>userId of user creating issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>name of user creating issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n    \"error\": false,\n    \"message\": \"New issue created\",\n    \"status\": 200,\n    \"data\": {\n        \"title\": \"Further issuese\",\n        \"description\": \"This is a description of further issue\",\n        \"status\": \"In-Progress\",\n        \"createdOn\": \"2020-07-27T10:18:37.000Z\",\n        \"issueId\": \"X_0ow3EnE\",\n        \"reporter\": {\n            \"reporterId\": \"5YaZpjaJ5\",\n            \"reporterName\": \"Akash Kumar\"\n        },\n        \"assignee\": [],\n        \"watchers\": [],\n        \"comments\": []\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueCreate"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issue/:issueId/add/watcher",
    "title": "api for adding user as watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of issue to view. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watcherName",
            "description": "<p>userId of user watching issue. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watcherId",
            "description": "<p>userName of user watching issue. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"added as watcher\",\n\"status\": 200,\n\"data\":\n    {\n        \"watcherId\":\"5YaZpjaJ5\",\n        \"watcherName\":\"Akash Kumar\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "PutApiV1IssueIssueidAddWatcher"
  },
  {
    "group": "issue",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issue/:issueId/edit",
    "title": "api for editing issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of issue to view. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>new title of issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>new description of issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>new status of issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeId",
            "description": "<p>userId of user to whom issue is assigned to. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeName",
            "description": "<p>userId of user to whom issue is assigned to. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"issue updated\",\n\"status\": 200,\n\"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "issue",
    "name": "PutApiV1IssueIssueidEdit"
  },
  {
    "group": "user",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/user/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"_tNpgDUZD\",\n            \"firstName\": \"OsamaBin\",\n            \"lastName\": \"Laaden\",\n            \"mobileNumber\": 9123456789,\n            \"createdOn\": \"2020-07-24T11:05:34.000Z\",\n            \"email\": \"osamabinlaaden@gmail.com\"\n        },\n        {\n            \"userId\": \"5YaZpjaJ5\",\n            \"firstName\": \"Akash\",\n            \"lastName\": \"kumar\",\n            \"mobileNumber\": 9006382312,\n            \"createdOn\": \"2020-07-25T18:08:27.000Z\",\n            \"email\": \"akashkumar@gmail.com\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "GetApiV1UserViewAll"
  },
  {
    "group": "user",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/:email/forgotpassword",
    "title": "api for password reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"reset password successfull\",\n\"status\": 200,\n\"data\": \n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1UserEmailForgotpassword"
  },
  {
    "group": "user",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/login",
    "title": "api for login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "           {\n    \"error\": false,\n    \"message\": \"login successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik1xektwb3N6ciIsImlhdCI6MTU5NTU5NDI5NjQ5NiwiZXhwIjoxNTk1NjgwNjk2NDk2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZS10cmFja2VyIiwiZGF0YSI6eyJ1c2VySWQiOiJfdE5wZ0RVWkQiLCJmaXJzdE5hbWUiOiJPc2FtYUJpbiIsImxhc3ROYW1lIjoiTGFhZGVuIiwibW9iaWxlTnVtYmVyIjo5MTIzNDU2Nzg5LCJlbWFpbCI6Im9zYW1hYmlubGFhZGVuQGdtYWlsLmNvbSJ9fQ.Vkf_RsNHSj7u_mWO--jmcYoa0BkGa_kWqKKoT1n6pVQ\",\n        \"userDetails\": {\n            \"userId\": \"_tNpgDUZD\",\n            \"firstName\": \"OsamaBin\",\n            \"lastName\": \"Laaden\",\n            \"mobileNumber\": 9123456789,\n            \"email\": \"osamabinlaaden@gmail.com\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1UserLogin"
  },
  {
    "group": "user",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/logout",
    "title": "api to logout .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "           {\n               \"error\": false,\n               \"message\": \"Logged Out Successfully\",\n               \"status\": 200,\n               \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1UserLogout"
  },
  {
    "group": "user",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/user/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n    \"error\": false,\n    \"message\": \"user created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"_tNpgDUZD\",\n        \"firstName\": \"OsamaBin\",\n        \"lastName\": \"Laaden\",\n        \"mobileNumber\": 9123456789,\n        \"createdOn\": \"2020-07-24T11:05:34.000Z\",\n        \"email\": \"osamabinlaaden@gmail.com\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1UserSignup"
  }
] });
