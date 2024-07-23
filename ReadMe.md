---

# CSV Writer with TypeScript

This project demonstrates my implementation of a CSV writer using plain TypeScript and JavaScript, without relying on any frameworks.

## Key Features

- **TypeScript**: Ensures type safety and a better development experience.
- **CSV Writing**: Creates and writes data to CSV files using native JavaScript methods.
- **No Frameworks**: Built with plain TypeScript and JavaScript for simplicity and flexibility.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/csv-writer-typescript.git
   cd csv-writer-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Building the Project

1. Build the project:
   ```bash
   npm run build
   ```

### Running the CSV Writer

1. Run the CSV writer script:
   ```bash
   node dist/index.js
   ```

## Usage

This project includes a simple CSV writer script that you can customize to suit your needs. Modify the `src/index.ts` file to add the data you want to write to the CSV file.

Example `src/index.ts`:

```typescript
import { writeFileSync } from "fs";

const data = [
  ["Name", "Age", "Email"],
  ["John Doe", "30", "john.doe@example.com"],
  ["Jane Smith", "25", "jane.smith@example.com"],
];

const csvContent = data.map((row) => row.join(",")).join("\n");

writeFileSync("output.csv", csvContent);

console.log("CSV file written successfully");
```

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to explore and contribute!
