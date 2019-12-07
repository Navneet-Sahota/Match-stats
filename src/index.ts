import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// const csvFileReader = new CSVFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCSV("football.csv");

matchReader.load();

// const summary = new Summary(new WinsAnalysis("Man City"), new ConsoleReport());
const summary = Summary.winsAnalysisAndConsoleReport("Man City"); // Alternate Method using static functions

summary.buildAndPrintReports(matchReader.matches);
