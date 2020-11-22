import { CsvFileReader } from './CsvFileReader';
import { dataStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
	mapRow(row: string[]): MatchData {
		return [
			dataStringToDate(row[0]),
			row[1],
			row[2],
			Number(row[3]),
			Number(row[4]),
			row[5] as MatchResult,
			row[6],
		];
	}
}
