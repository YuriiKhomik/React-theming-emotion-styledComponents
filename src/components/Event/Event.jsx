import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
// коли ми вказуємо просто папку (відносно src), то система, заходячи в цю папку одразу
// шукає файл index.js, а в цьому файлі лежать реекспорти
import { formatEventStart, formatEventDuration } from "utils";
import { iconSize } from "constants";
import PropTypes from "prop-types"
import css from "./Event.module.css"

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)

    // // css - це об'єкт css, який ми імпортуємо із css-модуля
    // // в ньому ключ - цн оригінальне ім'я класу, а значення - це вже обфускований, унікалізований клас
    // console.log(css)
    // // type  це тип події, яка приходить і бекенду (може бути три типи подій: free, paid і vip)
    // // і в залежності від типу події, ми обираємо необхідний нам клас із об'єкту css
    // // якщо значення властивості лежить в змінній, то ми стукаємось до нього
    // // через квадратні дужки
    // console.log(css[type])
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
                {location}
            </p>
            <p className={css.info}>
                <FaUserAlt className={css.icon} size={iconSize.sm}/>
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
                {formattedStart}
            </p>
            <p className={css.info}>
                <FaClock className={css.icon} size={iconSize.sm}/>
                {duration}
            </p>
            {/* і тут додатково до класу chip додаємо клас типу події, щоб відповідно */}
            {/* стилізувати елемент. Робимо цн через шаблонну строку. */}
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
        </div>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
} 