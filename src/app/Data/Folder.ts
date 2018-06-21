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
        id: 1,
        name: 'My Models',
        // visible: false,
        childs: [
            {
                id: 2,
                name: 'Folder 1',
                // visible: false,
                childs: [
                    {
                        id: 3,
                        name: 'Child 1',
                        // visible: false,
                        childs:[]
                    }
                ]
            },
            {
                id: 4,
                name: 'Folder 2',
                // visible: false,
                childs: [
                    {
                        id: 5,
                        name: 'Child 2',
                        // visible: true,
                        childs:[]
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Folder 3',
        // visible: true,
        childs:[]
    },
    {
        id: 7,
        name: 'Folder 4',
        // visible: true,
        childs: [
            {
                id: 8,
                name: 'Folder 5',
                // visible: true,
                childs:[]
            }
        ]
    },
    {
        id: 9,
        name: 'Folder 6',
        // visible: true,
        childs: [
            {
                id: 10,
                name: 'Folder 7',
                // visible: true,
                childs: [
                    {
                        id: 11,
                        name: 'Child 1',
                        // visible: true,
                        childs:[]
                    },
                ]
            },
            {
                id: 12,
                name: 'Folder 8',
                // visible: true,
                childs: [
                    {
                        id: 13,
                        name: 'Child 2',
                        // visible: true,
                        childs:[]
                    }
                ]
            },
            {
                id: 14,
                name: 'Folder 9',
                // visible: true,
                childs: [
                    {
                        id: 15,
                        name: 'Child 3',
                        // visible: true,
                        childs:[]
                    }
                ]
            },
        ]
    }
];

