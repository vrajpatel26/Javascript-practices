setTimeout(() => {
    console.log("i am number 1");
    setTimeout(() => {
        console.log("i am number 2");
        setTimeout(() => {
            console.log("i am number 3");
            setTimeout(() => {
                console.log("i am number 4");
                setTimeout(() => {
                    console.log("i am number 5");
                    setTimeout(() => {
                        console.log("i am number 6");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);