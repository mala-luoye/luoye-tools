import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "使用简单",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>优秀的API设计，人性化的文档说明。</>
  },
  {
    title: "功能丰富",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>为了解决繁琐的业务代码而生。</>
  },
  {
    title: "社区活跃",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>背后是一个追求精益求精的开源组织。</>
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
