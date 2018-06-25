export const Card = [
    {
        // link1: 'Move To',
        // link2: 'Rename',
        // link3: 'Remove',
        // checked: false,
        // percentage: '89.43%',
        accuracy: '89.43%',
        //accuracy: 'Accuracy',
        name: 'projectX Model 1',
        // InterValues: 'InterValues',
        // footer: 'Last Modified',
        footer: 'April 8, 2018',
        type: 'Models',
        childs: []
    },
    {
        accuracy: '89.43%',
        name: 'projectX Model 2',
        footer: 'April 8, 2018',
        type: 'Models',
        childs:[]
    },
    {
        name: 'Folder 1',
        type: 'Folder',
        childs: [
            {
                name: 'ABC',
                type: 'Folder',
                childs: [
                    {
                        name: 'Another',
                        type: 'Folder',
                        childs:[],
                    },
                    
                ],    
            },
            {
                name: 'DEF',
                type: 'Models',
                accuracy: '89.43%',
                footer: 'April 8, 2018',
                childs: []
            },
            {
                name: 'GHI',
                type: 'Models',
                accuracy: '89.43%',
                footer: 'April 8, 2018',
                childs: []
            },
            {
                name: 'JKL',
                type: 'Models',
                accuracy: '89.43%',
                footer: 'April 8, 2018',
                childs: []
            }
        ],
        //footer: '3 Models 1 Folders'
    },
    {
        name: 'Folder 2',
        type: 'Folder',
        //footer: '1 Models',
        childs:[]
    }
];