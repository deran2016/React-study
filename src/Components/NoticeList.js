function NoticeList(props) {
    function tableDatas(notices) {
        const datas = notices.map((notice) => 
            <tr>
                <td>{notice.no}</td>
                <td>{notice.title}</td>
                <td>{notice.date}</td>
                <td>{notice.views}</td>
            </tr>
        );

        return datas;
    }

    return (
        <table>
            <tr>
                <th>NO</th>
                <th>제목</th>
                <th>날짜</th>
                <th>조회수</th>
            </tr>
            {tableDatas(props.notices)}
        </table>
    );
}

export default NoticeList;