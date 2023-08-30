const hola = 'Hola a todos' // O(1)

for (let index = 0; index < array.length; index++) { // O(n)
    const element = array[index]; // O(1)
    for (let index = 0; index < array.length; index++) { // O(n^2)
        const element = array[index]; // O(1)
        while (condition) { // O(n^3)
            
        }
    }
    // 3(1) + 1(n) + 1(n^2) + 1(n^3)= > O(n^2)
    
}