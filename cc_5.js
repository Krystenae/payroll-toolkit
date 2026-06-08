// Employee Records

let employees = [
    {
        name: "John Smith",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Sarah Johnson",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Michael Brown",
        hourlyRate: 18,
        hoursWorked: 50
    }
];
// Base Pay Function

function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

// Overtime Function

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }
    return 0;
}

// Tax Function

function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}
// Payroll Processing Function

function processPayroll(employee) {

    let basePay = calculateBasePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    let overtimePay = calculateOvertimePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    let grossPay = basePay + overtimePay;

    let netPay = grossPay - calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

// Display Payroll Reports

employees.forEach(employee => {
    console.log(processPayroll(employee));
});
