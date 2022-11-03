const testScript = async () => {
    for(let i = 0; i<100; i++) {
        await wait(50);
        const res = await fetch(
            'http://localhost:3000'
        )
        if(res.status == 429) {
            console.log('Rate Limited Request Number: ', i);
        } else {
            console.log('Request Number: ', i, 'Success!');
        }
    }
}

const wait = async(ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));


testScript()