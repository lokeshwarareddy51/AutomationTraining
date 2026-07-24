

let employeeDetails: Map<string, number[]> = new Map();

employeeDetails.set("Alice Johnson", [75000.0, 5.1, 4.2]);
employeeDetails.set("Bob Smith", [68000.0, 3.2, 3.8]);
employeeDetails.set("Carol Davis", [82000.0, 7.1, 4.5]);
employeeDetails.set("David Brown", [90000.0, 10.2, 2.5]);
employeeDetails.set("Eva Green", [60000.0, 2.4, 3.5]);

let hike: Map<string, number> = new Map();

for (let key of employeeDetails.keys()) {

    const data = employeeDetails.get(key);
    if (data) {
        const baseSalary = data[0];
        const experience = data[1];
        const rating = data[2]

        let variablepay = 0;
        let Bonus = 0;
        let Reward = 0;


        if (rating! >= 4.0) {
            variablepay = 15;
            Bonus = 1500

        }
        else if (rating! >= 3 && rating! < 4) {

            variablepay = 10;
            Bonus = 1200

        }
        else {

            variablepay = 3;
            Bonus = 300
        }

        if (experience! > 5) {
            Reward = 5000;

        }

        let hikeAmount = (baseSalary! * variablepay / 100) + Bonus + Reward;

        let hikePercentage = (hikeAmount / baseSalary) * 100;

        hike.set(key, hikePercentage);

    }
}
for (let [key,value] of hike) {

    console.log(`${key} - ${value}`);

}