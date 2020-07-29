const appConfig = require('../../appConfig');
const authMiddleware = require('../middlewares/auth');
const issueController = require('../controller/issueController')

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/issue`;

    //route for creating new issue
    //required
    //--body-->title,description,status,reporterId,reporterName,assigneeId and assigneeName(Optional),
    app.post(`${baseUrl}/create`, authMiddleware.isAuthorized, issueController.createIssueFunction);
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0 
     * @api {post} /api/v1/issue/create api for creating new issue.
     *
     * @apiParam {string} title title of issue. (body params) (required)
     * @apiParam {string} description description of issue. (body params) (required)
     * @apiParam {string} status status of issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {string} reporterId userId of user creating issue. (body params) (required)
     * @apiParam {string} reporterName name of user creating issue. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
       {
    "error": false,
    "message": "New issue created",
    "status": 200,
    "data": {
        "title": "Further issuese",
        "description": "This is a description of further issue",
        "status": "In-Progress",
        "createdOn": "2020-07-27T10:18:37.000Z",
        "issueId": "X_0ow3EnE",
        "reporter": {
            "reporterId": "5YaZpjaJ5",
            "reporterName": "Akash Kumar"
        },
        "assignee": [],
        "watchers": [],
        "comments": []
    }
}
    */

    // getting all issue
    app.get(`${baseUrl}/view/all`, authMiddleware.isAuthorized, issueController.getAllIssuesFunction);
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issue/view/all api for getting all issues.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {number} skip number of data to skip for pagination. (query) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "All issues details found",
        "status": 200,
        "data": [
            {
            "title": "Problematic Issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:17:35.000Z",
            "issueId": "1dyo5BzcF",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:38:34.000Z",
            "issueId": "TjJfaarhC",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue 11",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T20:25:53.000Z",
            "issueId": "MKQoxg_7j",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:35.000Z",
            "issueId": "iCAtvMPsR",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:41.000Z",
            "issueId": "hcxhZCkhm",
            "assignee": [],
            "watchers": []
        }
                ]
        }
    */

    //getting single issue by issueid
    //params--issueId
    app.get(`${baseUrl}/:issueId/view`, authMiddleware.isAuthorized, issueController.getIssueByIdFunction);
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issue/:issueId/view api for getting single issue detail
     *
     * @apiParam {string} issueId id of issue to view. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
            {
            "title": "Problematic Issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:17:35.000Z",
            "issueId": "1dyo5BzcF",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:38:34.000Z",
            "issueId": "TjJfaarhC",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue 11",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T20:25:53.000Z",
            "issueId": "MKQoxg_7j",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:35.000Z",
            "issueId": "iCAtvMPsR",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:41.000Z",
            "issueId": "hcxhZCkhm",
            "assignee": [],
            "watchers": []
        }
            ]
        }
    */


    //getting issues assigned to a user
    //required--params--userId
    app.get(`${baseUrl}/:userId/view/all`, authMiddleware.isAuthorized, issueController.getIssuesOfUser);
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issue/:userId/view/all api for getting issues assigned to user
     *
     * @apiParam {string} userId id of user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {number} skip number of data to skip for pagination. (query) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "issue found for userId",
        "status": 200,
        "data": [
            {
            "title": "Problematic Issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:17:35.000Z",
            "issueId": "1dyo5BzcF",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:38:34.000Z",
            "issueId": "TjJfaarhC",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue 11",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T20:25:53.000Z",
            "issueId": "MKQoxg_7j",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:35.000Z",
            "issueId": "iCAtvMPsR",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:41.000Z",
            "issueId": "hcxhZCkhm",
            "assignee": [],
            "watchers": []
        }
            
                ]
        }
    */

    //getting reported issues of user
    //required --params--userId
    app.get(`${baseUrl}/:userId/reported/issues`, authMiddleware.isAuthorized, issueController.reportedIssuesOfUser);
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issue/:userId/reported/issues api for getting issues reported by user
     *
     * @apiParam {string} userId id of user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {number} skip number of data to skip for pagination. (query) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "reported issues of user",
        "status": 200,
        "data": [
            {
            "title": "Problematic Issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:17:35.000Z",
            "issueId": "1dyo5BzcF",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:38:34.000Z",
            "issueId": "TjJfaarhC",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue 11",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T20:25:53.000Z",
            "issueId": "MKQoxg_7j",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:35.000Z",
            "issueId": "iCAtvMPsR",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:41.000Z",
            "issueId": "hcxhZCkhm",
            "assignee": [],
            "watchers": []
        }

                ]
        }
    */

    //adding new comment
    app.post(`${baseUrl}/comment/create`, authMiddleware.isAuthorized, issueController.addCommentFunction)
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issue/comment/create api for adding comment
     *
     * @apiParam {string} userId id of user. (body params) (required)
     *  @apiParam {string} issueId issueId of issue to which comment is added to. (body params) (required)
     *  @apiParam {string} comment comment commented by user. (body params) (required)
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "issue found for userId",
        "status": 200,
        "data": [
            {
            "title": "Problematic Issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:17:35.000Z",
            "issueId": "1dyo5BzcF",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:38:34.000Z",
            "issueId": "TjJfaarhC",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue 11",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T20:25:53.000Z",
            "issueId": "MKQoxg_7j",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:35.000Z",
            "issueId": "iCAtvMPsR",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:41.000Z",
            "issueId": "hcxhZCkhm",
            "assignee": [],
            "watchers": []
        }
                 
                ]
        }
    */

    //editing issue
    app.put(`${baseUrl}/:issueId/edit`, authMiddleware.isAuthorized, issueController.editIssueFunction)
    /**
     * @apiGroup issue
     * @apiVersion  1.0.0
     * @api {put} /api/v1/issue/:issueId/edit api for editing issue
     *
     * @apiParam {string} issueId id of issue to view. (query params) (required)
     *  @apiParam {string} title new title of issue. (body params) (required)
     * @apiParam {string} description new description of issue. (body params) (required)
     * @apiParam {string} status new status of issue. (body params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiParam {string} assigneeId userId of user to whom issue is assigned to. (body params) (optional)
     * @apiParam {string} assigneeName userId of user to whom issue is assigned to. (body params) (optional)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "issue updated",
        "status": 200,
        "data": null
        }
    */

    //add watching
    //param--issueId,
    //body--watcherId,watcherName,authToken
    app.put(`${baseUrl}/:issueId/add/watcher`, authMiddleware.isAuthorized, issueController.addWatcherFunction)
    /**
    * @apiGroup issue
    * @apiVersion  1.0.0
    * @api {put} /api/v1/issue/:issueId/add/watcher api for adding user as watcher
    *
    * @apiParam {string} issueId id of issue to view. (query params) (required)
    * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
    * @apiParam {string} watcherName userId of user watching issue. (body params) (optional)
    * @apiParam {string} watcherId userName of user watching issue. (body params) (optional)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
       {
       "error": false,
       "message": "added as watcher",
       "status": 200,
       "data":
           {
               "watcherId":"5YaZpjaJ5",
               "watcherName":"Akash Kumar"
           }
       }
   */

    app.get(`${baseUrl}/search/result`, authMiddleware.isAuthorized, issueController.searchIssueFunction)
    /**
    * @apiGroup issue
    * @apiVersion  1.0.0
    * @api {get} /api/v1/issue/search/result api for searching issue
    *
    * @apiParam {string} searchText search string input by user. (query params) (required)
    * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
       {
       "error": false,
       "message": "search result",
       "status": 200,
       "data":[
           
            "title": "Problematic Issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:17:35.000Z",
            "issueId": "1dyo5BzcF",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T15:38:34.000Z",
            "issueId": "TjJfaarhC",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issue 11",
            "description": "This is a description of schematic isssue",
            "status": "in-progress",
            "createdOn": "2020-07-26T20:25:53.000Z",
            "issueId": "MKQoxg_7j",
            "assignee": [],
            "watchers": []
        },
        {
            "title": "Further issuesssssss",
            "description": "This is a description of further issue",
            "status": "In-Progress",
            "createdOn": "2020-07-27T10:07:35.000Z",
            "issueId": "iCAtvMPsR",
            "assignee": [],
            "watchers": []
        }

       ]
           
       }
   */
}

module.exports = {
    setRouter: setRouter
}

