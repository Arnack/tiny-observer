# tiny-observer

Observe objects for changes

**Installation**

    npm i tinyobserver --save

**Usage**

    const object = {
        a: "A string",
        b: 0
    };
    
    const callback = (prop, curr, prev) => {
        console.log('property: ', prop);
        console.log('new value: ', curr);
        console.log('previous value: ', prev);
    }
    
    const watchedObject = observe(object, callback);
    watchedObject.a = "A new string";
    watchedObject.c = 7;
