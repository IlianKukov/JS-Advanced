function canPrint(device){
    device.print = () => {
        console.log(`${device.name} is printing a page`);
    }
}

const printer = { name: 'ACME Printer'};
canPrint(printer);

// assigning a decorator function to printer object
printer.print();