const DataSource = {
    comments: [
        {
            text: "Comment 1",
            id: 1
        },
        {
            text: "Comment 2",
            id: 2
        }
    ],
    getComments: function () {
        return this.comments;
    },
    getBlogPost: function (id) {
        return `Hi this is a blogpost for Id = ${id}`;
    },
    addChangeListener: function (f) {
        this.comments = [
            {
                text: "Comment 1",
                id: 1
            },
            {
                text: "Comment 2",
                id: 2
            },
            {
                text: "Comment 3",
                id: 3
            },
            {
                text: "Comment 4",
                id: 4
            }
        ]
        setTimeout(f, 5000);
    },
    removeChangeListener(f) {
        this.comments = [];
        setTimeout(f, 1000);
    }
}
export default DataSource;