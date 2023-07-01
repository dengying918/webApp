const getData = async () => {
  const resp = await fetch(
    "https://dios.dianliantech.com/api-v2/portal/news/queryCompanyNewsDianLianPage",
    // 'https://dios.dianliantech.com/api-v2/sysEnterpriseHomePageConfig/queryByNoneEnterpriseId',
    {
      method: "POST",
      //   next: { revalidate: 10 },
      body: JSON.stringify({
        num: 0,
        orderBy: 1,
        search: "",
        size: 10,
      }),
      headers: {
        "Content-Type": "application/json",
        Entcode: "dlkj6868",
      },
    }
  );
  const data = resp.json();
  console.log( "======");
  return data;
};

import Link from "next/link";
import style from './index.module.scss'
async function Posts() {
  const listData = await getData();

  console.log(listData, "....");
  return (
    <div>
      <ul>
        {listData.datas.map((item: any) => {
          return (
            <li key={item.id} >
              <Link href={`posts/${item.id}`}>
                <div className={style.listTitle}>{item.title}</div>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;
