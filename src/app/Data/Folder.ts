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
        // visible: false,
        childs: [
            {
                name: 'Folder 1',
                // visible: false,
                childs: [
                    {
                        name: 'Child 1',
                        // visible: false,
                        childs:[]
                    }
                ]
            },
            {
                name: 'Folder 2',
                // visible: false,
                childs: [
                    {
                        name: 'Child 2',
                        // visible: true,
                        childs:[]
                    }
                ]
            }
        ]
    },
    {
        name: 'Folder 3',
        // visible: true,
        childs:[]
    },
    {
        name: 'Folder 4',
        // visible: true,
        childs: [
            {
                name: 'Folder 5',
                // visible: true,
                childs:[]
            }
        ]
    },
    {
        name: 'Folder 6',
        // visible: true,
        childs: [
            {
                name: 'Folder 7',
                // visible: true,
                childs: [
                    {
                        name: 'Child 1',
                        // visible: true,
                        childs:[]
                    },
                ]
            },
            {
                name: 'Folder 8',
                // visible: true,
                childs: [
                    {
                        name: 'Child 2',
                        // visible: true,
                        childs:[]
                    }
                ]
            },
            {
                name: 'Folder 9',
                // visible: true,
                childs: [
                    {
                        name: 'Child 3',
                        // visible: true,
                        childs:[]
                    }
                ]
            },
        ]
    }
];

