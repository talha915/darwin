/*export const Data=[
    {
        folder: 'My Models',
        subfolder: 'Folder 1',
        subfolder1: 'Folder 2'
    },
    {
        folder: 'Folder 3',
    },
    {
        folder: 'Folder 4',
        subfolder: 'Folder 5'
    },
    {
        folder: 'Folder 6',
        subfolder: 'Folder 7',
        subfolder1: 'Folder 8',
        subfolder2: 'Folder 9'
    }
];*/


export const Data=[
    {
        name: 'My Models',
        childs: [
            {
                name: 'Folder 1',
                childs: [
                    {
                        name: 'Child 1',
                        childs:[]
                    }
                ]
            },
            {
                name: 'Folder 2',
                childs: [
                    {
                        name: 'Child 2',
                        childs:[]
                    }
                ]
            }
        ]
    },
    {
        name: 'Folder 3',
        childs:[]
    },
    {
        name: 'Folder 4',
        childs: [
            {
                name: 'Folder 5',
                childs:[]
            }
        ]
    },
    {
        name: 'Folder 6',
        childs: [
            {
                name: 'Folder 7',
                childs: [
                    {
                        name: 'Child 1',
                        childs:[]
                    },
                ]
            },
            {
                name: 'Folder 8',
                childs: [
                    {
                        name: 'Child 2',
                        childs:[]
                    }
                ]
            },
            {
                name: 'Folder 9',
                childs: [
                    {
                        name: 'Child 3',
                        childs:[]
                    }
                ]
            },
        ]
    }
];

