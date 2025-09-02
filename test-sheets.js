import { appendToJoinSheet } from './src/lib/googleSheets.js';

async function testSheetsConnection() {
  try {
    console.log('Testing Google Sheets connection...');
    
    const testData = {
      mobileNumber: '9999999999',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      source: 'Test'
    };
    
    await appendToJoinSheet(testData);
    console.log('✅ Successfully connected to Google Sheets!');
  } catch (error) {
    console.error('❌ Error connecting to Google Sheets:', error.message);
    console.error('Full error:', error);
  }
}

testSheetsConnection();
