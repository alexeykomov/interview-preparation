const ROWS_IN_COL = 4

const matrix = [];
for (let row = 0; row < 4; row++) {
	matrix[row] = [];
	for (let col = 0; col < 5; col++) {
		if (col % 2 === 0) {
			const num = col * ROWS_IN_COL + (row + 1);
			matrix[row][col] = num;
			continue;
		}
		
		const num = col * ROWS_IN_COL + (ROWS_IN_COL - row);
		matrix[row][col] = num;
	}
}

console.log(matrix);