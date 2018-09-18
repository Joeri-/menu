module.exports = [
    {
        id: 1,
        username: 'Joeri',
        accounts: [
            'BE12 3456 7890 12',
            'BE12 3456 7890 13',
        ],
        blacklist: [
            {
                ISIN: 'TESLA',
                dateFrom: new Date(),
                dateTo: new Date()
            },
            {
                ISIN: 'NVIDIA',
                dateFrom: new Date(),
                dateTo: new Date()
            }
        ],
    },
    {
        id: 2,
        username: 'Wesley',
        accounts: [
            'BE34 5678 9012 34',
            'BE34 5678 9012 35',
        ],
        blacklist: [
            {
                ISIN: 'GOOGL',
                dateFrom: new Date(),
                dateTo: new Date()
            },
            {
                ISIN: 'APPL',
                dateFrom: new Date(),
                dateTo: new Date()
            },
        ],
    }
];