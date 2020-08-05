import * as moment from 'moment';

/**
 * @example
 * import getAge from 'path/to/getAge';
 */
export default ( date: Date ): number => {
    // (method) moment.Moment.diff(b: moment.MomentInput, unitOfTime?: moment.unitOfTime.Diff, precise?: boolean): number

    return moment().diff( date, 'years' );
};