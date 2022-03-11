# Jira API client


Here are some javascripts programs that call Jira API

How to use:
1. Run `npm i`
2. Then you have to create a file `config.json` and then set your jira host, admin user and password. For example:
```
{
    "host" : "https://jira.yourdomain.foo",
    "jirauser":"useradmin@yourdomain.foo",
    "password": "yourpass"
}
```

3. Now all you have to do is just run the choosen program. For example:
`node index.js`



-----------------


All scripts were writen based on oficial Jira API Documentation. See more at: https://docs.atlassian.com/software/jira/docs/api/REST/8.22.0/