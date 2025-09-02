import { getJoinEnquiries } from './src/lib/googleSheets.js';

async function readSheetsData() {
  try {
    console.log('Reading data from Google Sheets...');
    
    const data = await getJoinEnquiries();
    console.log('✅ Successfully read from Google Sheets!');
    console.log('Number of rows:', data.length);
    console.log('Data:');
    data.forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row);
    });
  } catch (error) {
    console.error('❌ Error reading from Google Sheets:', error.message);
    console.error('Full error:', error);
  }
}

readSheetsData();
