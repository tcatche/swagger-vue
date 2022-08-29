

/* eslint-disable */
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import qs from 'qs'
let domain = ''
let axiosInstance = axios.create()
export function getDomain(): string {
  return domain
}
export function setDomain($domain: string): void {
  domain = $domain
}
export function getAxiosInstance(): AxiosInstance {
  return axiosInstance
}
export function setAxiosInstance($axiosInstance: AxiosInstance): void {
  axiosInstance = $axiosInstance
}
type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'option' | 'patch'
export function request(method: RequestMethod, url: string, body, config) {
  let queryUrl = url
  if (!config) {
    config = {
      showNetworkError: true,
    }
  }
  if (method === 'delete') {
    return axiosInstance[method](queryUrl,{...config, data: body || {} })
  } else if (method === 'get') {
    let params = body ? qs.stringify(body) : ''
    if (params) {
      if (queryUrl.indexOf('?') < 0) {
        params = '?' + params
      } else if (!queryUrl.endsWith('?')) {
        params = '&' + params
      }
    }
    return axiosInstance[method](queryUrl + params, config)
  } else if(method === 'post' || method === 'put' || method === 'patch'){
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  }
}

export interface ObjectType {
  [key: string]: any;
}

export interface Config {
  $domain?: string;
  $config?: any;
}

export interface Parameters {
  [key: string]: any;
}

// ActivityAwardPoolSetting
export interface ActivityAwardPoolSetting {
  activityId?: number; // 活动id
  activityLimitNum?: number; // 参与机会的次数
  activityLimitType: number; // 参与机会的类型
  awardSettings?: Array<AwardSetting>; // 奖项设置
  luckyDrawId?: number; // 抽奖主表id
}

// 活动类
export interface 活动类 {
  activityCode: string; // 活动Code(抽奖模板value)
  activityProject?: number; // 所属项目
  applicableUser: string; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS
  auditBy?: string;
  auditCode?: number;
  auditName?: string;
  auditOpinion?: string;
  backImageId?: number;
  backImageUrl?: string;
  buttonImageId?: number;
  buttonImageUrl?: string;
  createdBy?: string;
  createdTime?: string;
  customizeConfig?: string;
  endTime?: string;
  groundCode?: number; // 上下架 1-上架，0-下架
  groundName?: string;
  h5Desc?: string;
  h5ImageId?: number;
  h5ImageUrl?: string;
  h5Name?: string;
  id?: number;
  isWhitelist?: boolean;
  lotteryTemplate?: string; // 抽奖模板名称
  msUrl?: string;
  name?: string;
  participationAuthority: number; // 参与权限:1-首次下单可抽奖,2-每次下单均可抽奖
  preImportSessionId?: number;
  products?: Array<PurchaseProduct>;
  publisherList?: Array<string>;
  purchaseLimit?: number;
  revision?: number;
  startTime?: string;
  status?: number; // 状态 1-未开始，2-进行中，3-已结束
  typeCode?: number;
  typeName?: string;
  updatedBy?: string;
  updatedTime?: string;
}

// AddActivityAwardPoolRequest
export interface AddActivityAwardPoolRequest {
  activityAwardPoolSetting: ActivityAwardPoolSetting;
  settingJson: string; // 设置对应的json信息
  tspActivityInfoVO: 活动类;
}

// 抽奖管理
export interface 抽奖管理 {
  activityCode?: string; // 所属活动
  activityName?: string; // 所属名称
  applicableUser?: string; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS
  createdBy?: string; // 创建人
  createdTime?: string; // 创建时间
  endCreatedTime?: string; // 创建时间结束（列表查询使用）
  endTime?: string; // 抽奖有效期结束时间
  from?: number;
  id?: number; // 抽奖管理id
  integralSetting?: number; // 积分设置
  lotteryTemplate?: number; // 抽奖模板
  lotteryTitle?: string; // 抽奖标题
  page?: string; // 分页
  participationAuthority?: number; // 参与条件设置:1-首次下单可抽奖,2-每次下单均可抽奖
  participationConditionSetting?: number; // 参与方式
  size?: string; // 每页数量
  startCreatedTime?: string; // 创建时间开始（列表查询使用）
  startTime?: string; // 抽奖有效期开始时间
  status?: number; // 状态 1-未开始，2-进行中，3-已结束
}

// AddActivityLuckyDrawRequest
export interface AddActivityLuckyDrawRequest {
  activityAwardPoolSetting: ActivityAwardPoolSetting;
  luckyDrawVO: 抽奖管理;
  settingJson?: string; // 设置对应的json信息
}

// AddLotteryPageSettingRequest
export interface AddLotteryPageSettingRequest {
  activityId: number; // 活动id
  settingJson: string; // 设置对应的json信息
}

// AllLotteryResult
export interface AllLotteryResult {
  awardGrade?: number; // 奖品等级
  awardId?: number; // 奖品id
  awardName?: string; // 奖品名称
  awardType?: number; // 奖品类型
  awardUrl?: string; // 奖品背景图片链接
  barCode?: string; // 券码
  barCodeName?: string; // 券码名
  exchangeUrl?: string; // 兑换地址
  isDisplayExchangeCode?: number; // 是否显示兑换码2-显示，1-不显示
  lotteryId?: number; // 抽奖id
  postAddress?: string; // 实物收件人地址
  postMobile?: string; // 实物收件人电话
  postName?: string; // 实物收件人姓名
  winDate?: string; // 中奖时间
}

// ApplicableUserDetailedVO
export interface ApplicableUserDetailedVO {
  applicableUser?: number; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserType?: number; // 类型 1：内容管理-适用用户 2：内容活动-适用用户 3：题库管理-适用用户 4：推广活动-适用用户
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
}

// Award
export interface Award {
  activityId?: number;
  assigned?: number;
  awardBackId?: string;
  awardBackUrl?: string;
  awardDesc?: string;
  awardGrade?: number;
  awardName?: string;
  awardNum?: number;
  awardStatus?: number;
  awardTotalNum?: number;
  awardType?: number;
  awardTypeName?: string;
  awardUrl?: string;
  createdBy?: string;
  createdTime?: string;
  id?: number;
  isDeleted?: number;
  isDisplayExchangeCodeButton?: number;
  luckyDrawId?: number;
  orderBy?: string;
  pageNum?: number;
  pageSize?: number;
  skuId?: number;
  skuName?: string;
  updatedBy?: string;
  updatedTime?: string;
}

// AwardAndPageSettingVo
export interface AwardAndPageSettingVo {
  activityId?: number; // 奖品的活动ID
  awardList?: Array<AwardH5VO>; // 奖项设置信息VO List
  settingJson?: string; // 设置对应的json信息
}

// AwardDescVO
export interface AwardDescVO {
  allocPoint?: number; // 积分的总数
  allocedPoint?: number; // 已分配的积分的总数
  assigned?: number; // 已经分配的奖品数量信息
  awardId?: number; // 奖品的活动奖项对应的id
  awardNum?: number; // 未分配的奖品数量
  awardTotalNum?: number; // 奖品总数量
  onAllocPoint?: number; // 未分配的积分数
}

// AwardH5VO
export interface AwardH5VO {
  activityId?: number; // 奖品的活动ID
  awardBackUrl?: string; // 背景图片链接
  awardDesc?: string; // 奖品描述
  awardGrade?: number; // 奖品等级
  awardName?: string; // 奖品名字
  awardType?: number; // 该活动的奖品对应的类型
  awardUrl?: string; // awardUrl
  id?: number; // 奖品的奖项ID
}

// AwardMSVO
export interface AwardMSVO {
  activityId?: number; // 奖品的活动ID
  assigned?: number; // 奖品已经分配的数量信息
  awardDesc?: string; // 奖品描述
  awardGrade?: number; // 奖品等级
  awardName?: string; // 奖品名字
  awardNum?: number; // 奖品数量
  awardTotalNum?: number; // 奖品总数量
  awardType?: number; // 该活动的奖品对应的类型
}

// AwardPoolGoodsRelationVoM
export interface AwardPoolGoodsRelationVoM {
  barCode?: string; // 券码信息
  barCodeId?: string; // 券码id
  barCodeName?: string; // 券码名
  exchangeUrl?: string; // 兑换地址
  goodsId?: string; // 商品id
  goodsName?: string; // 商品
  lotteryId?: number; // 中奖结果id
}

// AwardSetting
export interface AwardSetting {
  applicableUserDetailedVOList: Array<ApplicableUserDetailedVO>; // 中奖用户条件
  awardDesc?: string; // 奖项描述
  awardDescVO?: AwardDescVO;
  awardGrade: number; // 奖项级别
  awardGradeName?: string; // 奖项级别名称
  awardId?: number; // 奖项id
  awardImgBackId?: string; // 奖品背景图片id
  awardImgBackUrl?: string; // 奖品背景图片url
  awardImgId?: string; // 奖品图片id
  awardImgUrl?: string; // 奖品图片url
  awardName?: string; // 奖项名称
  awardOdds?: number; // 中奖概率
  awardStatus?: number; // 奖项状态1-上架，2-下架
  awardType?: number; // 奖品类型
  awardTypeName?: string; // 奖品类型名称
  awardTypeNum?: number; // 奖品类型数量
  isDelete?: number; // 该奖项设置是否有效 0:有效 1:失效
  isDisplayExchangeCodeButton: number; // 是否显示兑换码按钮 1-不显示 2-显示
  limitNumOfWins?: number; // 中奖次数限制
  luckyDrawId?: number; // 抽奖主表id
  poolSettings?: Array<PoolSetting>; // 奖池设置
  skuId?: number; // 商品id
  skuName?: string; // 商品名称
  whetherPoolSetting?: boolean; // 是否进行奖池的设置
}

// AwardVO
export interface AwardVO {
  activityCode?: string;
  activityId?: number; // 奖品的活动ID
  assigned?: number; // 奖品已经分配的数量信息
  awardBackId?: string; // 背景图片Id
  awardBackUrl?: string; // 背景图片链接
  awardDesc?: string; // 奖品描述
  awardGrade?: number; // 奖品等级
  awardId?: number; // 奖品的活动奖项对应的id
  awardName?: string; // 奖品名字
  awardNum?: number; // 奖品数量
  awardStatus?: number; // 奖项状态1-上架，2-下架
  awardTotalNum?: number; // 奖品总数量
  awardType?: number; // 该活动的奖品对应的类型
  awardTypeName?: string; // 该活动的奖品对应的类型
  awardUrl?: string; // awardUrl
  isDisplayExchangeCodeButton: number; // 是否显示兑换码按钮 1-不显示 2-显示
  luckyDrawId?: number; // 抽奖主表id(lucky_draw)
  luckyDrawPath?: number; // 福卡中奖的路径信息
  skuId?: number; // skuId
  skuName?: string; // 商品名称
}

// CheckActivityByIdRequest
export interface CheckActivityByIdRequest {
  activityId: number; // 活动id
}

// CheckActivityVO
export interface CheckActivityVO {
  ids?: Array<number>; // 编号
  type?: number; // 类型 1-删除，2-批量删除
}

// CheckContentManagementVO
export interface CheckContentManagementVO {
  contentTitle?: string; // 内容标题
  id?: number; // 内容管理id
}

// ClassificationVO
export interface ClassificationVO {
  classificationDescribe?: string; // 分类描述
  classificationName?: string; // 分类名称
  id?: number; // 分类id
  level?: number; // 级别
  parentId?: number; // 父id
}

// ContentActivitySettingContentVO
export interface ContentActivitySettingContentVO {
  activityCode?: string; // 活动code
  applicableUserName?: string; // 适用用户（新增查询和回显适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  bannerUrl?: string; // banner图URL
  contentActivitySettingContentId?: number; // 内容设置视频id
  contentActivitySettingId?: number; // 内容设置id
  contentManagementId?: number; // 内容管理id
  contentTitle?: string; // 内容标题
  dominatingScreen?: string; // 霸屏推送-（列表展示）
  goldCoinNumber?: number; // 系统权益-获得金币数量
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  reward?: string; // 奖励-（列表展示）
  rightsDetailedVOList?: Array<RightsDetailedVO>; // 权益内容
  rightsId?: number; // 权益id
  sortNumber?: number; // 序号
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
}

// ContentActivitySettingVO
export interface ContentActivitySettingVO {
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  contentActivitySettingContentVOList?: Array<ContentActivitySettingContentVO>; // 活动内容
  unlockActivity?: number; // 解锁活动 1：是 2 否
  unlockActivityNumber?: number; // 解锁活动设置观看次数可查看活跃活动
  unlockAnswer?: number; // 解锁答题 1：是 2 否
  unlockAnswerNumber?: number; // 解锁答题设置观看次数可答题
}

// ContentActivityVO
export interface ContentActivityVO {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动名称
  contentActivitySettingVOList?: Array<ContentActivitySettingVO>; // 内容设置
  contentActivityStatus?: number; // 上下架状态 1-上架 2-下架 3-发布
  contentActivityStatusName?: string; // （查询列表）状态
  contentActivityTitle?: string; // 内容活动标题
  createdTime?: string; // 创建时间
  endCreatedTime?: string; // 创建时间结束
  endTime?: string; // 有效期结束时间
  from?: number;
  id?: number; // 内容活动id
  ids?: string;
  page?: number; // 分页
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  startTime?: string; // 有效期开始时间
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
  validityEndTime?: string; // （查询条件）有效期结束
  validityStartTime?: string; // （查询条件）有效期开始
}

// ContentManagementVO
export interface ContentManagementVO {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  applicableUserName?: Array<string>; // 适用用户（新增查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  bannerUrl?: string; // banner图URL
  buttonName?: string; // 按钮名称
  classificationIds?: Array<number>; // 内容分类
  classificationName?: string; // 内容分类（列表查询适用）
  contentTitle?: string; // 内容标题
  createdTime?: string; // 创建时间
  detailsContentImageUrl?: string; // 详情内容-图片URL
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideoUrl?: string; // 详情内容-视频URL
  displayHoverButtonDetails?: number; // 是否显示详情的悬浮按钮 1-显示，2-不显示
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  goldCoinNumber?: number; // 系统权益-获得金币数量
  id?: number; // 内容管理id
  internalJumpUrl?: string; // 内部跳转URL
  lableManagementIds?: Array<number>; // 标签
  lableManagementName?: string; // 标签（列表查询适用）
  page?: number; // 分页
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  rightsDetailedVOList?: Array<RightsDetailedVO>; // 权益内容
  seeMoreUrl?: string; // URL跳转
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  urlType?: number; // 跳转类型 1-URL跳转 2-内部跳转URL
  vehicleModel?: string; // 车型（列表查询适用）
  vehicleModelName?: Array<string>; // 车型（新增查询适用）
  vehicleSeries?: string; // 车系（列表查询适用）
  vehicleSeriesName?: Array<string>; // 车系（新增查询适用）
  videoDescribe?: string; // 详情内容-视频描述
}

// ContentManagerResult
export interface ContentManagerResult {
  contentActivitySettingContentId?: number; // 视频活动，视频设置内容id
  goldCoinNumber?: number; // 金币
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
}

// CountListResult
export interface CountListResult {
  auditDeniedNum?: number; // 审核未通过数
  auditPassedNum?: number; // 审核通过数
  auditWaitedNum?: number; // 待审核数
  downGroundedNum?: number; // 已下架数
  total?: number; // 活动总数
  upGroundedNum?: number; // 已上架数
}

// DominatingScreenUserTemplate
export interface DominatingScreenUserTemplate {
  phone?: string; // 手机号
  vinCode?: string; // VIN
}

// RightsDetailedVO
export interface RightsDetailedVO {
  rightsImageUrl?: string; // 权益图片URL
  rightsInterests?: number; // 选择权益
  rightsName?: string; // 权益名称
  rightsType?: number; // 类型 1：内容管理权益卡券 2：内容管理推送权益  3：考卷奖励权益 4：推广活动 5：霸屏
  selectType?: number; // 权益类型 0-权益 2-实物奖品
  skuInfoId?: number; // 权益id(sku_info表id)
}

// DominatingScreenVO
export interface DominatingScreenVO {
  activityCode?: string; // 所属活动code
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  buttonImgUrl?: string; // 按钮图片url
  buttonUrl?: string; // 按钮跳转详情URL
  countDown?: number; // 倒计时（秒）
  dominatingScreenContent?: number; // 霸屏内容 1权益，2图片
  dominatingScreenName?: string; // 霸屏名称
  dominatingScreenUserTemplateList?: Array<DominatingScreenUserTemplate>; // 自定义用户
  dominatingScreenyStatus?: number; // （查询条件）上下架状态 1-上架 2-下架 3-发布
  endCreatedTime?: string; // （查询条件）创建时间结束
  endTime?: string; // 有效期结束时间
  from?: number;
  id?: number; // 霸屏ID
  ids?: string;
  imgUrl?: string; // 图片地址
  isDisplayButton?: number; // 按钮显示1-不显示 2-显示
  page?: number; // 分页
  popFrequency?: number; // 弹出频率1-不限制每次弹出 2-仅首次弹出 3-每日首次弹出 4-领取后不再弹出
  rightsDetailedVO?: RightsDetailedVO;
  size?: number; // 每页数量
  startCreatedTime?: string; // （查询条件）创建时间开始
  startTime?: string; // 有效期开始时间
  stationJumpImageUrl?: string; // 站内跳转-图片URL
  status?: number; // （查询条件）状态（1-未开始 2-进行中 3-已结束）
  targetUsers?: number; // 目标用户：1系统用户，2自定义用户
  triggerPosition?: number; // 触发位置1-新用户教育首页 2-用户学院首页 3-观看视频完毕后 4-提交答题后
  urlJump?: number; // 按钮跳转详情 1-站内跳转，2-站外跳转
  validityEndTime?: string; // （查询条件）有效期结束
  validityStartTime?: string; // （查询条件）有效期开始
}

// EditAwardSettingByActivityRequest
export interface EditAwardSettingByActivityRequest {
  activityAwardPoolSetting: ActivityAwardPoolSetting;
}

// EditAwardSettingRequest
export interface EditAwardSettingRequest {
  awardSetting: AwardSetting;
}

// ExaminationPaperPrizeSettingRequest
export interface ExaminationPaperPrizeSettingRequest {
  answerTotalScore?: number; // 考试总分
  examinationPaperId?: number; // 考卷id
}

// ExaminationPaperPrizeSettingVO
export interface ExaminationPaperPrizeSettingVO {
  awardGrade?: string; // 奖品等级
  bonusPoints?: number; // 领取奖品：奖励积分 1-为选中
  bonusPointsNumber?: number; // 奖励积分数
  id?: number; // 奖品设置id
  incentiveBenefits?: number; // 奖励权益 1-为选中
  maxScore?: number; // 最大分数
  minScore?: number; // 最小分数
  rightsDetailedVO?: RightsDetailedVO;
}

// ExaminationPaperVO
export interface ExaminationPaperVO {
  activityCode?: string; // 活动code
  additionalAnswerOpportunity?: number; // 额外答题机会 1-允许 2-每次分享后可获得几次答题机会 3-每次分享后，可获得几次答题机会，但最多可获得几次机会 4-第一次分享后，可额外获得几次答题机会
  answerAgainSetting?: number; // 再次答题设置：1-再次答题与上次题目保持一致 2-再次答题重新从题库中随机选择
  answerNumber?: number; // 答题数量
  answerOpportunityNumber?: number; // 额外答题机会次数
  answerSort?: number; // 答题顺序:1-随机 2-按题库顺序
  answerTime?: number; // 答题时间限制(秒)
  answerTotalScore?: number; // 答题总分
  endCreatedTime?: string; // 创建时间结束
  endTime?: string; // 考卷有效期结束时间
  examinationPaperPrizeSettingVOList?: Array<ExaminationPaperPrizeSettingVO>; // 奖品设置
  examinationPaperStatus?: number; // 当前上下架状态（1-上架 2-下架）
  examinationPaperTitle?: string; // 考卷标题
  from?: number;
  id?: number; // 考卷id
  ids?: string;
  maxFraction?: number; // 最大分数
  minFraction?: number; // 最小分数
  mostAnswerOpportunityNumber?: number; // 对应-额外答题机会3：最多可获得答题机会
  page?: number; // 分页
  questionBankId?: string; // 选择题库(以逗号隔开)
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  startTime?: string; // 考卷有效期开始时间
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
  userDefaultAnswerOpportunity?: number; // 用户默认答题机会次数
  validityEndTime?: string; // （查询条件）考卷有效期结束
  validityStartTime?: string; // （查询条件）考卷有效期开始
}

// ExtensionActivityVO
export interface ExtensionActivityVO {
  activityCode?: string; // 所属活动code
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  bannerImageUrl?: string; // banner图URL
  bannerVideoUrl?: string; // banner视频URL
  buttonImageUrl?: string; // 按钮图片跳转
  buttonName?: string; // 按钮名称
  buttonUrl?: string; // 按钮跳转
  createdTime?: string; // 创建时间
  detailsContentImage?: string; // 详情内容图片
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideo?: string; // 详情内容视频
  endCreatedTime?: string; // 创建时间结束（列表查询使用）
  extensionActivityStatus?: number; // 上下架状态 1-上架 2-下架 3-未发布
  from?: number;
  id?: number; // 推广活动id
  isDisplayButton?: number; // 是否显示详情的悬浮按钮 1-不显示 2-显示
  linkUrl?: string; // 跳转链接Url
  page?: number; // 分页
  promotionTitle?: string; // 推广标题
  promotionType?: number; // 推广类型 1-活跃活动 2-市场推广
  rewardIntegral?: number; // 奖励积分数量
  rightsDetailedVO?: RightsDetailedVO;
  rightsGive?: string; // 权益赠送（仅首次) 1-奖励积分 2-奖励卡券
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始（列表查询使用）
  understandDetails?: number; // 了解详情 1-站内详情 2-站外详情
  urlJump?: number; // 1-URL跳转 2-内部跳转
  videoDescribe?: string; // 详情内容-视频描述
}

// ExtensionActivityView
export interface ExtensionActivityView {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动名称
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  bannerImageUrl?: string; // banner图URL
  bannerVideoUrl?: string; // banner视频URL
  buttonImageUrl?: string; // 按钮图片跳转
  buttonName?: string; // 按钮名称
  buttonUrl?: string; // 按钮跳转
  createdTime?: string; // 创建时间
  detailsContentImage?: string; // 详情内容图片
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideo?: string; // 详情内容视频
  extensionActivityStatus?: number; // 上下架状态 1-上架 2-下架
  extensionActivityStatusName?: string; // 状态(列表展示)
  id?: number; // 推广活动id
  isDisplayButton?: number; // 是否显示详情的悬浮按钮 1-不显示 2-显示
  linkUrl?: string; // 跳转链接Url
  page?: number; // 分页
  promotionTitle?: string; // 推广标题
  promotionType?: number; // 推广类型 1-活跃活动 2-市场推广
  promotionTypeName?: string; // 推广类型(列表展示)
  rewardCard?: number; // 奖励卡券类型 1-京东优惠券 2-网易优惠券 3-酷我优惠券
  rewardIntegral?: number; // 奖励积分数量
  rightsDetailedVO?: RightsDetailedVO;
  rightsGive?: string; // 权益赠送（仅首次) 1-奖励积分 2-奖励卡券
  rightsGiveName?: string; // 赠送权益(列表展示)
  size?: number; // 每页数量
  understandDetails?: number; // 了解详情 1-站内详情 2-站外详情
  understandDetailsName?: string; // 查看详情(列表展示)
  urlJump?: number; // 1-URL跳转 2-内部跳转
  videoDescribe?: string; // 详情内容-视频描述
}

// GetAwardListByActivityIdFromResultRequest
export interface GetAwardListByActivityIdFromResultRequest {
  activityId: string; // 活动id
  awardId?: number; // 奖项id
  endTime?: string; // 时间的结束日期
  startTime?: string; // 时间的起始日期
}

// GetBarCodeByLotteryIdRequest
export interface GetBarCodeByLotteryIdRequest {
  lotteryId: Array<number>; // 中奖结果id
}

// GoodsSpecialDrawRequest
export interface GoodsSpecialDrawRequest {
  activityCode?: string;
  goodsId?: number;
  orderId?: string;
  phone?: string;
  userId?: string;
}

// GoodsSpecialView
export interface GoodsSpecialView {
  fullPrice?: string; // 获得积分
  remainNum?: number; // 剩余数量
  skuDefaultImg?: string; // 商品图片
  skuDesc?: string; // 解锁需要的分数
  skuId?: number; // skuId
  skuName?: string; // 商品名称
}

// GoodsVO
export interface GoodsVO {
  goodsId?: number;
  goodsName?: string;
  goodsNum?: number;
  imgUrl?: string;
}

// ImportResult
export interface ImportResult {
  coverNum?: number; // 覆盖数
  errMessageList?: Array<string>; // 失败信息
  errorNum?: number; // 失败数
  saveList?: Array<DominatingScreenUserTemplate>; // 保存集合
  successNum?: number; // 成功数
  total?: number; // 总数
}

// LotteryPageSettingOutVo
export interface LotteryPageSettingOutVo {
  activityId?: number;
  id?: number;
  setJson?: string;
}

// LotteryStockRequest
export interface LotteryStockRequest {
  activityId: string; // 活动id
  rightId: number; // 权益Id
}

// UserInfoLottery
export interface UserInfoLottery {
  address?: string; // 用户地址
  lotteryId?: number; // 中奖结果id
  phone?: string; // 用户手机号
  userName?: string; // 用户姓名
}

// LotteryUserInfoRequest
export interface LotteryUserInfoRequest {
  lotteryId: number; // 中奖结果id
  userId?: number; // 用户id
  userInfo: UserInfoLottery;
}

// LuckyDrawNewRequest
export interface LuckyDrawNewRequest {
  activityId: string; // 活动id
  isInternetCar?: boolean; // 是否是车联网车 true:表示是，false：表示否
  phone?: string; // 用户手机号
  sourceFrom?: string; // 用户标志调用的数据来源
  userId?: number; // 用户id
  userType?: string; // 用户类型
  vehicleModel?: string; // 车型
}

// LuckyDrawResult
export interface LuckyDrawResult {
  activityId?: number; // 奖品的活动ID
  assigned?: number; // 奖品已经分配的数量信息
  awardBackId?: string; // 背景图片Id
  awardBackUrl?: string; // 背景图片链接
  awardDesc?: string; // 奖品描述
  awardGrade?: number; // 奖品等级
  awardId?: number; // 奖品的活动奖项对应的id
  awardName?: string; // 奖品名字
  awardNum?: number; // 奖品数量
  awardTotalNum?: number; // 奖品总数量
  awardType?: number; // 该活动的奖品对应的类型
  awardTypeName?: string; // 该活动的奖品对应的类型
  awardUrl?: string; // awardUrl
  isFocasAll?: boolean; // 福卡是否集齐 true表示第一次集齐，false未集齐或者不是第一次集齐
  lotteryId?: number; // 中奖结果ID
  luckyDrawPath?: number; // 福卡中奖的路径信息
  skuId?: number; // skuId
  skuName?: string; // 商品名称
}

// PageUtils<T>
export interface PageUtils<T> {
  currPage?: number;
  list?: Array<T>; // 分页数据
  pageSize?: number; // 每页记录数
  totalCount?: number; // 总记录数
  totalPage?: number; // 总页数
}

// PoolSetting
export interface PoolSetting {
  activityId?: number; // 活动id
  allocFlag?: number; // 该奖池是否分配， 0:已分配 1: 未分配
  awardDescVO?: AwardDescVO;
  awardGrade?: string; // 奖项级别
  awardGradeName?: string; // 奖项级别名称
  awardId?: number; // 奖项id
  awardName?: string; // 奖项名称
  awardPoolId?: number; // 奖池id
  id?: number; // 奖池设置id
  isDelete?: number; // 该奖项设置是否有效 0:有效 1:失效
  luckyDrawId?: number; // 抽奖主表id
  releaseNum?: number; // 奖池的释放数量
  releaseTimeEnd?: string; // 奖池的释放的结束时间
  releaseTimeStart?: string; // 奖池的释放的开始时间
}

// PreImportResult
export interface PreImportResult {
  errorNum?: number; // 失败数
  sessionId?: number; // 会话id
  successNum?: number; // 成功数
  total?: number; // 总数
}

// ProductInfoWithPromotion
export interface ProductInfoWithPromotion {
  catalog3Id?: number;
  catalog3Name?: string;
  discountRatio?: number;
  endTime?: string;
  fixedPrice?: number;
  fullPrice?: number;
  levelOneId?: number;
  levelOneKey?: string;
  levelOneName?: string;
  levelTwoId?: number;
  levelTwoKey?: string;
  levelTwoName?: string;
  lockNum?: number;
  onSaleNum?: number;
  promotionId?: number;
  promotionName?: string;
  promotionSerialNum?: string;
  realPrice?: number;
  reducePrice?: number;
  reviewStatus?: number;
  sales?: Array<SalesPromotionView>;
  skuId?: number;
  skuName?: string;
  soldNum?: number;
  startTime?: string;
  totalNum?: number;
}

// PurchaseProduct
export interface PurchaseProduct {
  is_promotion?: boolean;
  skuId?: number;
}

// QueryActivityAwardByActivityIdRequest
export interface QueryActivityAwardByActivityIdRequest {
  activityId: number; // Long
}

// QueryActivityAwardPoolRequest
export interface QueryActivityAwardPoolRequest {
  activityId: number; // Long
}

// QueryActivityAwardProductRequest
export interface QueryActivityAwardProductRequest {
  awardTypeCode?: number; // 奖项类型编码
  name?: string; // 名称
  page?: number; // 分页
  size?: number; // 每页数量
}

// QueryActivityLotteryTemplateRequest
export interface QueryActivityLotteryTemplateRequest {
  activityCode: string; // 活动Code
}

// QueryAwardDescByAwardIdRequest
export interface QueryAwardDescByAwardIdRequest {
  awardId: number; // 活动项id
}

// QueryAwardListByActivityIdRequest
export interface QueryAwardListByActivityIdRequest {
  activityId: number; // 活动id
  awardType?: number; // 该活动的奖品对应的类型
}

// QueryAwardSettingRequest
export interface QueryAwardSettingRequest {
  activityId: string; // 活动id
  luckyDrawId?: number; // 抽奖主表id
}

// QueryAwardTotalConditionByIdRequest
export interface QueryAwardTotalConditionByIdRequest {
  awardId: number; // Long
}

// QueryLotteryDrawRuleRequest
export interface QueryLotteryDrawRuleRequest {
  activityCode: string; // 活动code
}

// QueryLotteryPageSettingByActivityIdRequest
export interface QueryLotteryPageSettingByActivityIdRequest {
  activityId: number; // 活动id
}

// QueryTheListOfInterestsRequest
export interface QueryTheListOfInterestsRequest {
  activityAwardTypeCode: number; // 活动奖项类型Code
}

// QuestionBankCheckVO
export interface QuestionBankCheckVO {
  activityCode?: string;
  answerNumber?: number;
  answerTotalScore?: number;
  questionBankId?: string;
}

// QuestionBankCheckView
export interface QuestionBankCheckView {
  message?: string;
  status?: boolean;
}

// QuestionBankVO
export interface QuestionBankVO {
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  id?: number; // 题库id
  page?: number; // 分页
  questionBankName?: string; // 题库名称
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
}

// RightProductInfoActiveView
export interface RightProductInfoActiveView {
  applyNum?: number; // 审批通过数量
  isStock?: number; // 是否有库存，0-没有库存，1-有库存
  skuDefaultImg?: string; // 商品默认图片
  skuDefaultImgKey?: string; // 商品默认图片key
  skuDesc?: string; // 商品描述
  skuInfoId?: number; // 商品id
  skuName?: string; // 商品名称
}

// RightProductOutDetailView
export interface RightProductOutDetailView {
  exchangeLink?: string; // 兑换链接
  goodsPoolId?: number; // 权益池Id
  imgUrl?: string; // 商品图片地址
  name?: string; // 商品名称
  num?: number; // 商品数量
  rightDescribe?: string; // 商品描述
  serialNum?: string; // 券码
  skuId?: number; // 商品id
}

// RightSkuInfoView
export interface RightSkuInfoView {
  activedNum?: number; // 激活数量
  canDecreaseNum?: number; // 可减少数量
  canIncreaseNum?: number; // 可增加数量
  catalog3Id?: number; // 商品分类id(默认3级)
  catalog3Name?: string; // 权益类别名称
  createTime?: string; // 创建时间
  drawedNum?: number; // 已领取数量
  enableStatus?: number;
  exchangeLink?: string; // 权益兑换链接
  onSaleNum?: number; // 可售数量
  operatorName?: string; // 操作人
  price?: number; // 商品价格
  skuDefaultImg?: string; // 商品图片上传地址
  skuDefaultImgKey?: string; // 商品图片key
  skuDesc?: string; // 商品描述
  skuId?: number; // skuId
  skuName?: string; // 商品名称
  spuId?: number; // 商品id
  totalNum?: number; // 总数
}

// RightsDetailedRequest
export interface RightsDetailedRequest {
  activityId?: string; // 活动Code
  mainTableId: number; // 主表id
  rightsType: number; // 类型
}

// RightsDetailedResult
export interface RightsDetailedResult {
  rightsImageUrl?: string; // 权益图片URL
  rightsName?: string; // 权益名称
  skuInfoId?: number; // 权益id(sku_info表id)
}

// SalesPromotionView
export interface SalesPromotionView {
  endTime?: string; // 结束时间
  id?: number; // 促销活动id
  levelOneId?: number; // 促销一级类型id
  levelOneKey?: string; // 促销一级类型key
  levelOneName?: string; // 促销一级类型名称
  levelTwoId?: number; // 促销二级类型id
  levelTwoKey?: string; // 促销二级类型key
  levelTwoName?: string; // 促销二级类型名称
  mark?: string; // 备注
  name?: string; // 促销活动名称
  promotionStatus?: number; // 审核状态
  serialNum?: string; // 促销编号
  startTime?: string; // 开始时间
  userScope?: number; // 用户范围：0-全部，1-指定用户
  userScopeSessionId?: number; // 如果是指定用户，则需带上此参数，由上传时服务端返回
  value?: number; // 促销值
}

// SubjectVO
export interface SubjectVO {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  id?: number; // 题目ID
  optionType?: number; // 0为全选，选项类型(1-单选，2-多选)
  options?: string; // 题目选项
  page?: number; // 分页
  problemDescription?: string; // 问题描述
  problemDescriptionEnclosureUrl?: string; // 问题描述附件
  problemType?: number; // 0为全选，问题类型（1-纯文本，2-视频，3-图片）
  questionBankId?: string; // 所属题库id
  rightSolution?: string; // 正确答案
  score?: number; // 得分
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  vehicleSeries?: string; // 1为全选，车系（查询适用）
}

// 中奖信息条目VO
export interface 中奖信息条目VO {
  activityCode?: string; // 活动Code
  activityId?: number; // 活动id
  awardGrade?: string; // 奖品等级
  awardId?: number; // 奖品id
  awardName?: string; // 奖品名称
  awardType?: number; // 奖品类型
  awardUrl?: string; // 奖品对应的图片地址信息
  isDisplayExchangeCodeButton?: number; // 是否显示兑换码按钮:1-不显示 2-显示
  lotteryId?: number; // 抽奖id
  lotteryTime?: string; // 中奖时间
  result?: number; // 抽奖结果 1 中 0 否
  userId?: string; // 用户id
  userInfo?: string; // 用户地址信息
}

// 公共响应对象<T>
export interface 公共响应对象<T> {
  data?: T;
  errorCode?: string; // 错误码
  errorMsg?: string; // 错误信息
  status?: boolean; // 响应状态
}

// 内容管理
export interface 内容管理 {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  applicableUserName?: string; // 装备（用户）(列表展示)
  bannerUrl?: string; // banner图URL
  buttonName?: string; // 按钮名称
  classificationIds?: Array<number>; // （新增编辑）内容分类
  classificationName?: string; // 列表展示内容分类
  contentTitle?: string; // 内容标题
  createdTime?: string; // 创建时间
  detailsContentImageUrl?: string; // 详情内容-图片URL
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideoUrl?: string; // 详情内容-视频URL
  displayHoverButtonDetails?: number; // 是否显示详情的悬浮按钮 1-显示，2-不显示
  goldCoinNumber?: number; // 系统权益-获得金币数量
  id?: number; // 内容id
  internalJumpUrl?: string; // 内部跳转URL
  lableManagementIds?: Array<number>; // （新增编辑）标签
  lableManagementName?: string; // 列表展示标签
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  pushTypeName?: string; // 是否霸屏推送
  rightsDetailedVOList?: Array<RightsDetailedVO>; // 权益内容
  rightsName?: string; // 系统权益
  seeMoreUrl?: string; // URL跳转
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  urlType?: number; // 跳转类型 1-URL跳转 2-内部跳转URL
  urlTypeName?: string; // 查看更多按钮配置
  vehicleModel?: string; // 车型（查询适用）
  vehicleSeries?: string; // 车系（查询适用）
  videoDescribe?: string; // 详情内容-视频描述
}

// 内容管理导出
export interface 内容管理导出 {
  applicableUserName?: string; // 装备（用户）(列表展示)
  bannerUrl?: string; // banner图URL
  classificationName?: string; // 列表展示内容分类
  contentTitle?: string; // 内容标题
  createdTime?: string; // 创建时间
  id?: number; // 内容管理id
  lableManagementName?: string; // 标签
  pushTypeName?: string; // 是否霸屏推送
  rightsName?: string; // 系统权益
  urlTypeName?: string; // 查看更多按钮配置
  vehicleModel?: string; // 车型（查询适用）
  vehicleSeries?: string; // 车系（查询适用）
}

// 分类管理
export interface 分类管理 {
  cententNumber?: number; // 分类关联的内容总数
  classificationDescribe?: string; // 分类描述
  classificationName?: string; // 分类名称
  classificationParentName?: string; // 分类名称
  id?: number; // 分类id
  level?: number; // 级别
  parentId?: number; // 父id
}

// 删除逻辑提示
export interface 删除逻辑提示 {
  message?: string; // 提示信息
  type?: string; // 内容管理/题目管理（1.该无关联活动,可以删除，2.活动已上架，不能删除，3.活动未发布/已下架，可以选择删除，4.编辑逻辑校验）
}

// 券码删除请求
export interface 券码删除请求 {
  codes: Array<string>; // 券码列表
  goodsPoolId: number; // 权益池id
  poolType: number; // 0-公共库 1-活动库
  rightId: number; // 权益id
}

// 券码明细列表
export interface 券码明细列表 {
  backTime?: string; // 回库时间
  code?: string; // 券码
  createTime?: string; // 导入时间
  drawTime?: string; // 领取时间
  fromActivity?: string; // 来源活动
  id?: number; // id
  isBack?: number; // 是否回库 0-否 1-是
  isDraw?: number; // 是否领取 0-否 1-是
  isLock?: number; // 是否锁定 0-否 1-是
  lastActivity?: string; // 当前所属活动
  lifeCycle?: number; //  券码生命周期 0-入库 1-锁定 2-出库 3-回库
  lockTime?: string; // 锁定时间
  phone?: string; // 中奖用户手机号码
  poolType?: number; // 所属库 0-公共库 1-活动库
  validTime?: string; // 有效期
}

// 券码明细列表券码数统计
export interface 券码明细列表券码数统计 {
  drawTotal?: number; // 已领取
  lockTotal?: number; // 库存锁定
  rightName?: string; // 权益名称
  total?: number; // 总数
}

// 券码路径列表
export interface 券码路径列表 {
  activityName?: string; // 关联活动
  author?: string; // 创建者
  backTime?: string; // 回库时间
  code?: string; // 券码
  comingTime?: string; // 流入时间
  drawTime?: string; // 领取时间
  isBack?: number; // 是否回库 0-否 1-是
  isDraw?: number; // 是否领取 0-否 1-是
  isLock?: number; // 是否锁定 0-否 1-是
  lockTime?: string; // 锁定时间
  poolType?: string; // 所属库 0-公共库 1-活动库
  validTime?: string; // 有效期
}

// 券码领取
export interface 券码领取 {
  activityCode: string; // 活动code
  barCode?: string; // 券码Code
  goodsPoolId?: number; // 权益池Id
  lockNum?: number; // 锁定数量
  orderId: string; // 订单id
  orderPhone: string; // 订单电话
  orderUserId: string; // 订单用户
  originSys?: string; // 来源系统
  rightId: number; // 权益Id
}

// 发放请求
export interface 发放请求 {
  integralId: number; // 积分发奖id
  type: number; // 类型 1-积分发放 2-活动发放
}

// 响应活动内容主数据
export interface 响应活动内容主数据 {
  contentActivityId?: number; // 活动内容id
  contentActivitySettingResultList?: Array<响应活动内容明细数据>; // 活动内容详情
  endTime?: string; // 有效期结束时间
  startTime?: string; // 有效期开始时间
}

// 响应活动内容明细数据
export interface 响应活动内容明细数据 {
  bannerUrl?: string; // banner图
  buttonName?: string; // 按钮名称
  contentActivitySettingId?: number; // 活动内容设置id
  contentManagementId?: number; // 内容id
  contentTitle?: string; // 活动内容标题
  detailsContentImageUrl?: string; // 图片（详情内容）
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideoUrl?: string; // 视频（详情内容）
  displayHoverButtonDetails?: number; // 是否显示详情的悬浮按钮 1-显示，2-不显示
  goldCoinNumber?: number; // 系统权益-获得金币数量
  internalJumpUrl?: string; // 内部跳转URL
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  seeMoreUrl?: string; // URL跳转
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  unlockActivity?: number; // 解锁活动 1：是 2 否
  unlockActivityNumber?: number; // 解锁活动设置观看次数可查看活跃活动
  unlockAnswer?: number; // 解锁答题 1：是 2 否
  unlockAnswerNumber?: number; // 解锁答题设置观看次数可答题
  urlType?: number; // 跳转类型 1-URL跳转 2-内部跳转URL
  videoDescribe?: string; // 视频描述
}

// 审核列表总数统计
export interface 审核列表总数统计 {
  approveTotal?: number; // 待审核（待处理）
  closedTotal?: number; // 已完结
  processedTotal?: number; // 采购端-已处理(运营端-已通过)
  rejectedTotal?: number; // 运营端-已驳回
}

// 审核列表实体
export interface 审核列表实体 {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  approve?: number; // 申请数量
  approveBy?: string; // 处理人
  approveId?: string; // 审批id
  approveReason?: string; // 拒绝原因
  approveStatus?: number; // 审核状态 0-待审核 1-通过 2-拒绝 3-已完结 4-已撤回
  approveTime?: string; // 处理时间
  approveUrls?: string; // 申请凭证
  author?: string; // 申请人
  createTime?: string; // 申请时间
  draw?: number; // 已领取
  goodsPoolId?: number; // 权益池id
  leftNumber?: number; // 剩余
  notes?: string; // 备注说明
  poolType?: number; // 0-公共库 1-活动库
  returnBy?: string; // 回库人
  returnNum?: string; // 回库数量
  returnTime?: string; // 回库时间
  rightId?: number; // 权益id
  rightName?: string; // 权益名称
  rightType?: number; // 权益类型
  status?: number; // 活动状态 1-未开始，2-进行中，3-已结束
}

// 抽奖规则
export interface 抽奖规则 {
  applicableUser?: string; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS
  endTime?: string; // 活动结束时间
  participationAuthority?: number; // 参与权限:1-首次下单可抽奖,2-每次下单均可抽奖
  startTime?: string; // 活动开始时间
}

// 推广活动
export interface 推广活动 {
  bannerImageUrl?: string; // banner图
  bannerVideoUrl?: string; // banner视频
  buttonImageUrl?: string; // 按钮图片跳转站内
  buttonName?: string; // 按钮名称
  buttonUrl?: string; // 按钮跳转站外
  detailsContentImage?: string; // 详情内容-图片
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideo?: string; // 详情内容-视频
  extensionActivityId?: number; // 推广活动ID
  isDisplayButton?: number; // 是否显示详情的悬浮按钮 1-不显示 2-显示
  linkUrl?: string; // 跳转链接
  promotionTitle?: string; // 推广标题
  promotionType?: number; // 推广类型 1-活跃活动 2-市场推广
  rewardIntegral?: number; // 奖励积分
  rightsImageUrl?: string; // 权益图片URL
  rightsName?: string; // 权益名称
  skuInfoId?: number; // 权益id
  understandDetails?: number; // 了解详情 1-站内详情 2-站外详情
  urlJump?: number; // 1-URL跳转 2-内部跳转
  videoDescribe?: string; // 视频描述
}

// 推广活动列表
export interface 推广活动列表 {
  activityId: string; // 活动code
  extensionActivityId?: number; // 推广活动id
  promotionType: number; // 推广类型 1-活跃活动 2-市场推广
  userId?: string; // 用户id
  userType?: string; // 用户类型
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
}

// 新增权益请求
export interface 新增权益请求 {
  activityCode?: string; // 活动Code(抽奖模板value)
  activityProject: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  goodsInfoTypeId: number; // 权益类型id
  poolType: number; // 库存类型 0-公共库 1-活动库
  rightDesc: string; // 权益描述
  rightExchange?: string; // 权益兑换链接
  rightName: string; // 权益名称
  rightType: number; // 权益类型 0-权益 2-实物奖品
  rightUrl: string; // 权益图片链接
}

// 新增积分发奖
export interface 新增积分发奖 {
  activityCode?: string; // 活动名称
  activityProject?: number; // 所属项目
  applicableUser?: string; // 适用用户:2-CNS,3-CRS,4-非CNS非CRS
  awardDescription?: string; // 发奖说明
  category?: number; // 权益类型：0-权益 2-实物奖品 4-积分
  endTime?: string; // 结束时间
  goodsInfoTypeId?: number; // 权益名称
  integralType?: number; // 1-UBI,2-蚂蚁森林
  publisherList?: Array<string>; // 活动发布端
  startTime?: string; // 开始时间
}

// 最近中奖信息条目VO
export interface 最近中奖信息条目VO {
  awardName?: string; // 奖品名称
  userId?: string; // 用户id
  winGrade?: number; // 奖品级别
}

// 权益列表
export interface 权益列表 {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  activityProjectName?: string;
  author?: string; // 创建者
  back?: number; // 回库数
  createTime?: string; // 创建时间
  draw?: number; // 已领取
  goodsInfoTypeId?: number; // 权益类型id
  goodsPoolId?: number; // 权益池id
  left?: number; // 剩余可申请
  lockNumber?: number; // 已锁定
  rightDesc?: string; // 权益描述
  rightExchange?: string; // 权益兑换链接
  rightId?: number; // 权益id
  rightName?: string; // 权益名称
  rightType?: number; // 权益类型 0-权益 2-实物奖品
  rightTypeName?: string;
  rightUrl?: string; // 权益图片URL
  status?: number; // 活动状态 1-未开始，2-进行中，3-已结束
  statusName?: string;
  total?: number; // 总数
}

// 权益类型请求
export interface 权益类型请求 {
  id?: number; // 权益类型ID
  rightName?: string; // 权益名称
  rightType?: number; // 权益类型 0-权益 2-实物奖品 4-积分奖品
}

// 查看中奖信息请求参数
export interface 查看中奖信息请求参数 {
  activityCode: string; // 活动Code
  awardType?: string; // 奖项类型：0-权益 1-再抽一次 2-实物奖品 3-谢谢参与 4-积分奖品 5-福卡;多个已英文逗号隔开(例如：0,2)
  userId: number; // 用户id
}

// 查看所有活动的中奖信息请求参数
export interface 查看所有活动的中奖信息请求参数 {
  awardType?: string; // 奖项类型：0-权益 1-再抽一次 2-实物奖品 3-谢谢参与 4-积分奖品 5-福卡;多个已英文逗号隔开(例如：0,2)
  userId: number; // 用户id
}

// 查看最近中奖信息请求参数
export interface 查看最近中奖信息请求参数 {
  activityId: string; // 活动Code
  awardType?: string; // 奖项类型：0-权益 1-再抽一次 2-实物奖品 3-谢谢参与 4-积分奖品 5-福卡;多个已英文逗号隔开(例如：0,2)
  limit?: number; // 显示条数
}

// 查询审批通过的物资权益
export interface 查询审批通过的物资权益 {
  activityCode: string; // 所属活动code
  selectType: number; // 选择权益 0-权益 2-实物奖品
}

// 查询活动
export interface 查询活动 {
  activityCode: string; // 活动Code
  activityName: string; // 活动名称
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
}

// 标签管理
export interface 标签管理 {
  cententNumber?: number; // 标签关联的内容总数
  id?: number; // 标签id
  labelDescribe?: string; // 标签描述
  labelName?: string; // 标签名称
}

// 校验抽奖模板VO
export interface 校验抽奖模板VO {
  activityName?: string; // 所属活动名称
  isLotteryTemplate?: boolean; // 抽奖模板是否存在：true-存在，false-不存在
}

// 校验提示
export interface 校验提示 {
  message?: string; // 提示信息
  status?: boolean; // true表示通过，false表示校验不通过
}

// 活动内容
export interface 活动内容 {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动名称
  contentActivitySettingVOList?: Array<ContentActivitySettingVO>; // 内容设置
  contentActivityStatus?: number; // 上下架状态 1-上架 2-下架
  contentActivityTitle?: string; // 内容活动标题
  createdTime?: string; // 创建时间
  endTime?: string; // 有效期结束时间
  id?: number; // 活动内容ID
  listStatus?: string; // 列表状态
  startTime?: string; // 有效期开始时间
  startTimeAndEndTime?: string; // 列表有效期
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
}

// 活动列表
export interface 活动列表 {
  activityCode?: string; // 活动Code（活动模板类型）
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  applicableUser?: string; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS
  endTime?: string; // 活动时间-结束时间
  name?: string; // 活动名称
  publisherList?: Array<string>; // 活动发布端
  startTime?: string; // 活动时间-开始时间
}

// 活跃活动
export interface 活跃活动 {
  activityId: string; // 活动code
  contentManagementId?: number; // 视频内容id
  userId?: string; // 用户id
  userType?: string; // 用户类型
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
  videoSerach?: string; // 视频搜索
}

// 特殊配置规则
export interface 特殊配置规则 {
  appIntegral: number; // 发放app积分
  drivingScore: number; // 驾驶得分
}

// 特殊配置请求
export interface 特殊配置请求 {
  goodsId: number; // 物资信息id
  goodsRule?: 特殊配置规则;
  id?: number; // 特殊配置ID
}

// 申请单权益查询和新增
export interface 申请单权益查询和新增 {
  approve: number; // 申请数量
  approveId?: number; // 审批id
  goodsPoolId: number; // 权益池id
  locked?: number; // 已锁定数量
  poolType?: number; // 库存类型 0-公共库 1-活动库
  rightId?: number; // 权益id
  rightName: string; // 权益名称
  surplus: number; // 剩余可申请数量
  total?: number; // 总数
}

// 申请单的审批查询<T>
export interface 申请单的审批查询<T> {
  activityCode?: string; // 活动Code
  activityPool?: Array<T>; // 活动库权益
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  approveId?: string; // 审批id
  approveUrls?: Array<string>; // 申请凭证
  notes?: string; // 备注说明
  publicPool?: Array<T>; // 公共库权益
}

// 申请单的查询<T>
export interface 申请单的查询<T> {
  activityCode?: string; // 活动Code
  activityPool?: Array<T>; // 活动库权益
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  approveUrls?: Array<string>; // 申请凭证
  notes?: string; // 备注说明
  publicPool?: Array<T>; // 公共库权益
}

// 积分发奖列表
export interface 积分发奖列表 {
  activityName?: string; // 活动名称
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  activityProjectName?: string; // 所属项目名称
  activityTime?: string; // 活动时间
  awardDescription?: string; // 发奖说明
  awardPeopleNumber?: number; // 奖励人数
  category?: number; // 权益类型：0-权益 2-实物奖品 4-积分
  categoryName?: string; // 权益类型名称
  createdBy?: string; // 创建人
  createdTime?: string; // 创建时间
  exchangeUrl?: string; // 兑换链接
  id?: number; // 积分发奖Id
  integralType?: number; // 积分类型:1-UBI,2-蚂蚁森林
  integralTypeName?: string; // 积分类型名称
  publisher?: string; // 活动发布端-数据库接收
  publisherList?: Array<string>; // 活动发布端-展示
  releaseStatus?: number; // 发布状态 1-未发放 2-已发放
  releaseStatusName?: string; // 发布状态名称
  rightName?: string; // 权益名称
  status?: number; // 活动状态 1-未开始，2-进行中，3-已结束
  statusName?: string;
  updatedBy?: string; // 发布人
  updatedTime?: string; // 发布时间
}

// 积分发奖导入请求
export interface 积分发奖导入请求 {
  sessionId: number; // sessionId
}

// 积分发奖明细
export interface 积分发奖明细 {
  activityCode: string; // 活动名称
  activityCodeType: string; // 活动模板类型
  activityProject: number; // 所属项目
  applicableUser: string; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS
  awardDescription?: string; // 发奖说明
  category: number; // 权益类型：0-权益 2-实物奖品 4-积分
  endTime: string; // 结束时间
  goodsInfoTypeId: number; // 权益名称
  integralType: number; // 1-UBI,2-蚂蚁森林
  publisherList: Array<string>; // 活动发布端
  startTime: string; // 开始时间
}

// 积分用户信息列表
export interface 积分用户信息列表 {
  activityName?: string; // 活动名称
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  activityProjectName?: string; // 所属项目名称
  activityTime?: string; // 活动时间
  awardDescription?: string; // 发奖说明
  awardName?: string; // 奖项名称
  id?: number; // 积分用户信息Id
  integralId?: number; // 积分发奖id
  integralQuantity?: number; // 积分数量
  phone?: string; // 用户手机号码
  publisher?: string; // 活动发布端-导出
  publisherList?: Array<string>; // 活动发布端-列表展示
  releaseStatus?: number; // 发布状态 1-未发放 2-已发放
  releaseStatusName?: string; // 发布状态名称
  userId?: string; // 用户ID
}

// 积分用户信息删除请求
export interface 积分用户信息删除请求 {
  idList?: Array<number>; // 券码列表
  integralId: number; // 积分发奖id
}

// 答题考卷
export interface 答题考卷 {
  activityId: string; // 活动code
  answerTimes?: number; // 已答题次数
  serialNumberExaminationPool?: number; // 考卷池序号
  userId?: string; // 用户id
  userType?: string; // 用户类型
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
}

// 编辑权益请求
export interface 编辑权益请求 {
  goodsInfoTypeId: number; // 权益类型id
  rightDesc: string; // 权益描述
  rightExchange?: string; // 权益兑换链接
  rightId?: number; // 权益id
  rightName: string; // 权益名称
  rightType: number; // 权益类型 0-权益 2-实物奖品
  rightUrl: string; // 权益图片链接
}

// 编辑积分发奖
export interface 编辑积分发奖 {
  activityCode?: string; // 活动名称
  activityProject?: number; // 所属项目
  applicableUser?: string; // 适用用户:2-CNS,3-CRS,4-非CNS非CRS
  awardDescription?: string; // 发奖说明
  category?: number; // 权益类型：0-权益 2-实物奖品 4-积分
  endTime?: string; // 结束时间
  goodsInfoTypeId?: number; // 权益名称
  integralPrizesId: number; // 积分发奖id
  integralType?: number; // 1-UBI,2-蚂蚁森林
  publisherList?: Array<string>; // 活动发布端
  startTime?: string; // 开始时间
}

// 考卷内容
export interface 考卷内容 {
  additionalAnswerOpportunity?: number; // 额外答题机会 1-允许 2-每次分享后可获得几次答题机会 3-每次分享后，可获得几次答题机会，但最多可获得几次机会 4-第一次分享后，可额外获得几次答题机会
  additionalAnswerOpportunityFraction?: string; // 额外答题机会分数
  answerAgainSetting?: number; // 再次答题设置：1-再次答题与上次题目保持一致 2-再次答题重新从题库中随机选择
  answerNumber?: number; // 答题数量
  answerOpportunityNumber?: number; // 额外答题机会次数
  answerSort?: number; // 答题顺序:1-随机 2-按题库顺序
  answerTime?: number; // 答题时间限制(分钟)
  answerTotalScore?: number; // 答题总分
  endTime?: string; // 考卷有效期结束时间
  examinationPaperId?: number; // 考卷id
  examinationPaperTitle?: string; // 考卷标题
  mostAnswerOpportunityNumber?: number; // 对应-额外答题机会3：最多可获得答题机会
  startTime?: string; // 考卷有效期开始时间
  subjectViewList?: Array<题目内容详情>; // 所有题目
  userDefaultAnswerOpportunity?: number; // 用户默认答题机会次数
}

// 考卷奖品
export interface 考卷奖品 {
  bonusPoints?: number; // 领取奖品：奖励积分 1-为选中
  bonusPointsNumber?: number; // 奖励积分
  examinationPaperId?: number; // 考卷id
  gradeDescribe?: string; // H5等级描述
  gradeName?: string; // H5等级名称
  gradeUrl?: string; // H5等级图片URL
  incentiveBenefits?: number; // 奖励权益 1-为选中
  maxScore?: number; // 最大得分
  minScore?: number; // 最小得分
  rightsImageUrl?: string; // 奖励权益图片URL
  rightsName?: string; // 奖励权益名称
  skuInfoId?: number; // 权益id
}

// 考卷数据
export interface 考卷数据 {
  activityCode?: string; // 活动code
  activityName?: string; // 所属活动名称
  additionalAnswerOpportunity?: number; // 额外答题机会 1-允许 2-每次分享后可获得几次答题机会 3-每次分享后，可获得几次答题机会，但最多可获得几次机会 4-第一次分享后，可额外获得几次答题机会
  additionalAnswerOpportunityName?: string; // 额外答题机会
  answerAgainSetting?: number; // 再次答题设置：1-再次答题与上次题目保持一致 2-再次答题重新从题库中随机选择
  answerNumber?: number; // 答题数量
  answerOpportunityNumber?: number; // 额外答题机会次数
  answerSort?: number; // 答题顺序:1-随机 2-按题库顺序
  answerTime?: number; // 答题时间限制(秒)
  answerTotalScore?: number; // 答题总分
  applicableUser?: string; // 列表展示-适用用户
  createdTime?: string; // 创建时间
  endTime?: string; // 考卷有效期结束时间
  examinationPaperPrizeSettingVOList?: Array<ExaminationPaperPrizeSettingVO>; // 奖品设置
  examinationPaperStatus?: number; // 当前上下架状态（1-上架 2-下架 3-未发布）
  examinationPaperTitle?: string; // 考卷标题
  id?: number; // 考卷ID
  listStatus?: string; // 列表展示-状态
  maxFraction?: number; // 最大分数
  minFraction?: number; // 最小分数
  mostAnswerOpportunityNumber?: number; // 对应-额外答题机会3：最多可获得答题机会
  prizeSetting?: string; // 列表展示-奖品设置
  questionBankId?: string; // 选择题库(以逗号隔开)
  startTime?: string; // 考卷有效期开始时间
  status?: number; // 状态（1-未发布 2-已上架（未开始） 3-已上架（进行中）4-已上架（已结束） 5-已下架）
  userDefaultAnswerOpportunity?: number; // 用户默认答题机会次数
  validityExaminationPaper?: string; // 考卷有效期(列表展示适用)
}

// 车型
export interface 车型 {
  name?: string; // 车型
  value?: string; // 车型值
}

// 车系
export interface 车系 {
  name?: string; // 车系
  value?: string; // 车系值
  vehicleModelViewList?: Array<车型>; // 车型
}

// 适用用户
export interface 适用用户 {
  name?: string; // 用户类型名称
  userType?: string;
  value?: string; // 用户类型值
  vehicleModel?: string;
  vehicleSeries?: string;
  vehicleSeriesViewList?: Array<车系>; // 车系
}

// 霸屏
export interface 霸屏 {
  activityCode?: string; // 所属活动code
  buttonImgUrl?: string; // 按钮图片url
  buttonUrl?: string; // 按钮跳转详情URL
  countDown?: number; // 倒计时（秒）
  dominatingScreenContent?: number; // 霸屏内容 1权益，2图片
  dominatingScreenId?: number; // 霸屏ID
  dominatingScreenName?: string; // 霸屏名称
  endTime?: string; // 有效期结束时间
  imgUrl?: string; // 图片地址
  isDisplayButton?: number; // 按钮显示1-不显示 2-显示
  popFrequency?: number; // 弹出频率1-不限制每次弹出 2-仅首次弹出 3-每日首次弹出 4-领取后不再弹出
  rightsImageUrl?: string; // 权益图片URL
  rightsName?: string; // 权益名称
  skuInfoId?: number; // 权益id
  startTime?: string; // 有效期开始时间
  stationJumpImageUrl?: string; // 站内跳转-图片URL
  targetUsers?: number; // 目标用户：1系统用户，2自定义用户
  triggerPosition?: number; // 触发位置1-新用户教育首页 2-用户学院首页 3-观看视频完毕后 4-提交答题后
  urlJump?: number; // 按钮跳转详情 1-站内跳转，2-站外跳转
}

// 霸屏列表
export interface 霸屏列表 {
  activityId: string; // 活动code
  dominatingScreenId?: number; // 霸屏ID
  triggerPosition?: number; // 触发位置1-新用户教育首页 2-用户学院首页 3-观看视频完毕后 4-提交答题后
  userId?: string; // 用户id
  userType?: string; // 用户类型
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
}

// 题库数据
export interface 题库数据 {
  createdTime?: string; // 创建时间
  id?: number; // 题库ID
  questionBankName?: string; // 题库名称
  subjectNumber?: number; // 数量
}

// 题目内容详情
export interface 题目内容详情 {
  optionType?: number; // 选项类型(1-单选，2-多选)
  options?: string; // 题目选项
  problemDescription?: string; // 问题描述
  problemDescriptionEnclosureUrl?: string; // 问题描述附件
  problemType?: number; // 问题类型（1-纯文本，2-视频，3-图片）
  rightSolution?: string; // 正确答案
  score?: number; // 得分
  serialNumberExaminationPool?: number; // 考卷池序号
  subjectId?: number; // 题目ID
}

// 题目数据
export interface 题目数据 {
  applicableUser?: number; // 适用用户(装备类型):1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserDetailedVOList?: Array<ApplicableUserDetailedVO>; // 适用用户
  applicableUserName?: string; // 装备（用户）(列表展示)
  createdTime?: string; // 创建时间
  id?: number; // 题目ID
  optionType?: number; // 选项类型(1-单选，2-多选)
  optionTypeName?: string; // 选项类型(列表展示)
  options?: string; // 题目选项
  problemDescription?: string; // 问题描述
  problemDescriptionEnclosureUrl?: string; // 问题描述附件
  problemType?: number; // 问题类型（1-纯文本，2-视频，3-图片）
  problemTypeName?: string; // 问题类型(列表展示)
  questionBankId?: string; // 题库ID
  questionBankName?: string; // 题库名称
  rightSolution?: string; // 正确答案
  score?: number; // 得分
  vehicleModel?: string; // 车型
  vehicleSeries?: string; // 车系
}


export interface AwardPublicgetAwardListByActivityIdFromResultParameters {
  request: GetAwardListByActivityIdFromResultRequest; // request
}

/**
 * @name: AwardPublicgetAwardListByActivityIdFromResult
 * @date: 2022/1/20
 * @description: 中奖结果信息查询
 * @param: {request} [GetAwardListByActivityIdFromResultRequest]
 * @return: Promise<AxiosResponse<公共响应对象<Array<AwardVO>>>>
 */
export function AwardPublicgetAwardListByActivityIdFromResult(parameters: Config & AwardPublicgetAwardListByActivityIdFromResultParameters): Promise<AxiosResponse<公共响应对象<Array<AwardVO>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/award/getAwardListByActivityIdFromResult'

  return request('post', host + path, body, $config)
}

export interface ClassificationaddClassificationParameters {
  classificationVO: ClassificationVO; // classificationVO
}

/**
 * @name: ClassificationaddClassification
 * @date: 2022/1/20
 * @description: 新增分类管理
 * @param: {classificationVO} [ClassificationVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ClassificationaddClassification(parameters: Config & ClassificationaddClassificationParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/addClassification'

  return request('post', host + path, body, $config)
}

export interface ClassificationcheckClassificationParameters {
  id: number; // id
}

/**
 * @name: ClassificationcheckClassification
 * @date: 2022/1/20
 * @description: 删除分类管理校验
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ClassificationcheckClassification(parameters: Config & ClassificationcheckClassificationParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/checkClassification'

  return request('post', host + path, body, $config)
}

export interface ClassificationcheckClassificationNameParameters {
  classificationVO: ClassificationVO; // classificationVO
}

/**
 * @name: ClassificationcheckClassificationName
 * @date: 2022/1/20
 * @description: 分类管理名称唯一校验
 * @param: {classificationVO} [ClassificationVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ClassificationcheckClassificationName(parameters: Config & ClassificationcheckClassificationNameParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/checkClassificationName'

  return request('post', host + path, body, $config)
}

export interface ClassificationdeleteParameters {
  id: number; // id
}

/**
 * @name: Classificationdelete
 * @date: 2022/1/20
 * @description: 删除分类管理
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function Classificationdelete(parameters: Config & ClassificationdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/delete'

  return request('post', host + path, body, $config)
}

export interface ClassificationinfoParameters {
  id: number; // id
}

/**
 * @name: Classificationinfo
 * @date: 2022/1/20
 * @description: 分类管理详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<分类管理>>>
 */
export function Classificationinfo(parameters: Config & ClassificationinfoParameters): Promise<AxiosResponse<公共响应对象<分类管理>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/info/{id}'

  return request('get', host + path, body, $config)
}

export interface ClassificationlistParameters {
  classificationDescribe?: string; // 分类描述
  classificationName?: string; // 分类名称
  id?: number; // 分类id
  level?: number; // 级别
  parentId?: number; // 父id
}

/**
 * @name: Classificationlist
 * @date: 2022/1/20
 * @description: 分类管理列表
 * @param: {classificationDescribe} [string]
 * @param: {classificationName} [string]
 * @param: {id} [integer]
 * @param: {level} [integer]
 * @param: {parentId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<Array<分类管理>>>>
 */
export function Classificationlist(parameters: Config & ClassificationlistParameters): Promise<AxiosResponse<公共响应对象<Array<分类管理>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/list'

  return request('get', host + path, body, $config)
}

export interface ClassificationupdateClassificationParameters {
  classificationVO: ClassificationVO; // classificationVO
}

/**
 * @name: ClassificationupdateClassification
 * @date: 2022/1/20
 * @description: 编辑分类管理
 * @param: {classificationVO} [ClassificationVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ClassificationupdateClassification(parameters: Config & ClassificationupdateClassificationParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/classification/updateClassification'

  return request('post', host + path, body, $config)
}

export interface ContentActivityaddContentActivityParameters {
  contentActivityVO: ContentActivityVO; // contentActivityVO
}

/**
 * @name: ContentActivityaddContentActivity
 * @date: 2022/1/20
 * @description: 新增活动内容
 * @param: {contentActivityVO} [ContentActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ContentActivityaddContentActivity(parameters: Config & ContentActivityaddContentActivityParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/addContentActivity'

  return request('post', host + path, body, $config)
}

export interface ContentActivitycheckContentActivityParameters {
  checkActivityVO: CheckActivityVO; // checkActivityVO
}

/**
 * @name: ContentActivitycheckContentActivity
 * @date: 2022/1/20
 * @description: 删除和编辑内容内容活动校验
 * @param: {checkActivityVO} [CheckActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ContentActivitycheckContentActivity(parameters: Config & ContentActivitycheckContentActivityParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/checkContentActivity'

  return request('post', host + path, body, $config)
}

export interface ContentActivityexportContentActivityParameters {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动名称
  contentActivityStatus?: number; // 上下架状态 1-上架 2-下架 3-发布
  contentActivityStatusName?: string; // （查询列表）状态
  contentActivityTitle?: string; // 内容活动标题
  createdTime?: string; // 创建时间
  endCreatedTime?: string; // 创建时间结束
  endTime?: string; // 有效期结束时间
  from?: number;
  id?: number; // 内容活动id
  ids?: string;
  page?: number; // 分页
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  startTime?: string; // 有效期开始时间
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
  validityEndTime?: string; // （查询条件）有效期结束
  validityStartTime?: string; // （查询条件）有效期开始
  contentActivitySettingVO?: Array<ContentActivitySettingVO>; // ContentActivitySettingVO
}

/**
 * @name: ContentActivityexportContentActivity
 * @date: 2022/1/20
 * @description: 活动内容导出
 * @param: {activityCode} [string]
 * @param: {activityName} [string]
 * @param: {contentActivityStatus} [integer]
 * @param: {contentActivityStatusName} [string]
 * @param: {contentActivityTitle} [string]
 * @param: {createdTime} [string]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {ids} [string]
 * @param: {page} [integer]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @param: {validityEndTime} [string]
 * @param: {validityStartTime} [string]
 * @param: {contentActivitySettingVO} [array]
 * @return: Promise<AxiosResponse<never>>
 */
export function ContentActivityexportContentActivity(parameters: Config & ContentActivityexportContentActivityParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/contentActivity/export'

  return request('get', host + path, body, $config)
}

export interface ContentActivitydeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: ContentActivitydelete
 * @date: 2022/1/20
 * @description: 删除活动内容
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ContentActivitydelete(parameters: Config & ContentActivitydeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/delete'

  return request('post', host + path, body, $config)
}

export interface ContentActivitygetContentManagementListParameters {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserName?: Array<string>; // 适用用户（新增查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  bannerUrl?: string; // banner图URL
  buttonName?: string; // 按钮名称
  classificationIds?: Array<number>; // 内容分类
  classificationName?: string; // 内容分类（列表查询适用）
  contentTitle?: string; // 内容标题
  createdTime?: string; // 创建时间
  detailsContentImageUrl?: string; // 详情内容-图片URL
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideoUrl?: string; // 详情内容-视频URL
  displayHoverButtonDetails?: number; // 是否显示详情的悬浮按钮 1-显示，2-不显示
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  goldCoinNumber?: number; // 系统权益-获得金币数量
  id?: number; // 内容管理id
  internalJumpUrl?: string; // 内部跳转URL
  lableManagementIds?: Array<number>; // 标签
  lableManagementName?: string; // 标签（列表查询适用）
  page?: number; // 分页
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  seeMoreUrl?: string; // URL跳转
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  urlType?: number; // 跳转类型 1-URL跳转 2-内部跳转URL
  vehicleModel?: string; // 车型（列表查询适用）
  vehicleModelName?: Array<string>; // 车型（新增查询适用）
  vehicleSeries?: string; // 车系（列表查询适用）
  vehicleSeriesName?: Array<string>; // 车系（新增查询适用）
  videoDescribe?: string; // 详情内容-视频描述
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  rightsDetailedVO?: Array<RightsDetailedVO>; // RightsDetailedVO
}

/**
 * @name: ContentActivitygetContentManagementList
 * @date: 2022/1/20
 * @description: 根据适用用户，车系，车型查询内容管理
 * @param: {applicableUser} [integer]
 * @param: {applicableUserName} [array]
 * @param: {bannerUrl} [string]
 * @param: {buttonName} [string]
 * @param: {classificationIds} [array]
 * @param: {classificationName} [string]
 * @param: {contentTitle} [string]
 * @param: {createdTime} [string]
 * @param: {detailsContentImageUrl} [string]
 * @param: {detailsContentType} [integer]
 * @param: {detailsContentVideoUrl} [string]
 * @param: {displayHoverButtonDetails} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {from} [integer]
 * @param: {goldCoinNumber} [integer]
 * @param: {id} [integer]
 * @param: {internalJumpUrl} [string]
 * @param: {lableManagementIds} [array]
 * @param: {lableManagementName} [string]
 * @param: {page} [integer]
 * @param: {pushContent} [integer]
 * @param: {pushImageUrl} [string]
 * @param: {pushType} [integer]
 * @param: {seeMoreUrl} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {systemRights} [string]
 * @param: {urlType} [integer]
 * @param: {vehicleModel} [string]
 * @param: {vehicleModelName} [array]
 * @param: {vehicleSeries} [string]
 * @param: {vehicleSeriesName} [array]
 * @param: {videoDescribe} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {rightsDetailedVO} [array]
 * @return: Promise<AxiosResponse<公共响应对象<Array<内容管理导出>>>>
 */
export function ContentActivitygetContentManagementList(parameters: Config & ContentActivitygetContentManagementListParameters): Promise<AxiosResponse<公共响应对象<Array<内容管理导出>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/getContentManagementList'

  return request('get', host + path, body, $config)
}

export interface ContentActivityinfoParameters {
  id: number; // id
}

/**
 * @name: ContentActivityinfo
 * @date: 2022/1/20
 * @description: 活动内容详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<活动内容>>>
 */
export function ContentActivityinfo(parameters: Config & ContentActivityinfoParameters): Promise<AxiosResponse<公共响应对象<活动内容>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/info/{id}'

  return request('get', host + path, body, $config)
}

export interface ContentActivitylistParameters {
  activityCode?: string; // 所属活动code
  activityName?: string; // 所属活动名称
  contentActivityStatus?: number; // 上下架状态 1-上架 2-下架 3-发布
  contentActivityStatusName?: string; // （查询列表）状态
  contentActivityTitle?: string; // 内容活动标题
  createdTime?: string; // 创建时间
  endCreatedTime?: string; // 创建时间结束
  endTime?: string; // 有效期结束时间
  from?: number;
  id?: number; // 内容活动id
  ids?: string;
  page?: number; // 分页
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  startTime?: string; // 有效期开始时间
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
  validityEndTime?: string; // （查询条件）有效期结束
  validityStartTime?: string; // （查询条件）有效期开始
  contentActivitySettingVO?: Array<ContentActivitySettingVO>; // ContentActivitySettingVO
}

/**
 * @name: ContentActivitylist
 * @date: 2022/1/20
 * @description: 活动内容列表
 * @param: {activityCode} [string]
 * @param: {activityName} [string]
 * @param: {contentActivityStatus} [integer]
 * @param: {contentActivityStatusName} [string]
 * @param: {contentActivityTitle} [string]
 * @param: {createdTime} [string]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {ids} [string]
 * @param: {page} [integer]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @param: {validityEndTime} [string]
 * @param: {validityStartTime} [string]
 * @param: {contentActivitySettingVO} [array]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<活动内容>>>>
 */
export function ContentActivitylist(parameters: Config & ContentActivitylistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<活动内容>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/list'

  return request('get', host + path, body, $config)
}

export interface ContentActivityupdateContentActivityParameters {
  contentActivityVO: ContentActivityVO; // contentActivityVO
}

/**
 * @name: ContentActivityupdateContentActivity
 * @date: 2022/1/20
 * @description: 编辑活动内容
 * @param: {contentActivityVO} [ContentActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ContentActivityupdateContentActivity(parameters: Config & ContentActivityupdateContentActivityParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/updateContentActivity'

  return request('post', host + path, body, $config)
}

export interface ContentActivityupdateStatusParameters {
  contentActivityStatus: number; // 上下架状态
  id: number; // 内容活动id
}

/**
 * @name: ContentActivityupdateStatus
 * @date: 2022/1/20
 * @description: 状态修改
 * @param: {contentActivityStatus} [integer]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ContentActivityupdateStatus(parameters: Config & ContentActivityupdateStatusParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentActivity/updateStatus'

  return request('post', host + path, body, $config)
}

export interface ContentManagementaddContentManagementParameters {
  contentManagementVO: ContentManagementVO; // contentManagementVO
}

/**
 * @name: ContentManagementaddContentManagement
 * @date: 2022/1/20
 * @description: 新增内容管理
 * @param: {contentManagementVO} [ContentManagementVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ContentManagementaddContentManagement(parameters: Config & ContentManagementaddContentManagementParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/addContentManagement'

  return request('post', host + path, body, $config)
}

export interface ContentManagementcheckContentManagementParameters {
  ids: Array<number>; // ids
}

/**
 * @name: ContentManagementcheckContentManagement
 * @date: 2022/1/20
 * @description: 删除内容管理校验
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<删除逻辑提示>>>
 */
export function ContentManagementcheckContentManagement(parameters: Config & ContentManagementcheckContentManagementParameters): Promise<AxiosResponse<公共响应对象<删除逻辑提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/checkContentManagement'

  return request('post', host + path, body, $config)
}

export interface ContentManagementcheckContentManagementTitleParameters {
  checkContentManagementVO: CheckContentManagementVO; // checkContentManagementVO
}

/**
 * @name: ContentManagementcheckContentManagementTitle
 * @date: 2022/1/20
 * @description: 内容管理内容标题唯一校验
 * @param: {checkContentManagementVO} [CheckContentManagementVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ContentManagementcheckContentManagementTitle(parameters: Config & ContentManagementcheckContentManagementTitleParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/checkContentManagementTitle'

  return request('post', host + path, body, $config)
}

export interface ContentManagementcheckUpdateContentManagementParameters {
  id: number; // id
}

/**
 * @name: ContentManagementcheckUpdateContentManagement
 * @date: 2022/1/20
 * @description: 编辑内容管理校验
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ContentManagementcheckUpdateContentManagement(parameters: Config & ContentManagementcheckUpdateContentManagementParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/checkUpdateContentManagement'

  return request('post', host + path, body, $config)
}

export interface ContentManagementexportContentManagementParameters {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserName?: Array<string>; // 适用用户（新增查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  bannerUrl?: string; // banner图URL
  buttonName?: string; // 按钮名称
  classificationIds?: Array<number>; // 内容分类
  classificationName?: string; // 内容分类（列表查询适用）
  contentTitle?: string; // 内容标题
  createdTime?: string; // 创建时间
  detailsContentImageUrl?: string; // 详情内容-图片URL
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideoUrl?: string; // 详情内容-视频URL
  displayHoverButtonDetails?: number; // 是否显示详情的悬浮按钮 1-显示，2-不显示
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  goldCoinNumber?: number; // 系统权益-获得金币数量
  id?: number; // 内容管理id
  internalJumpUrl?: string; // 内部跳转URL
  lableManagementIds?: Array<number>; // 标签
  lableManagementName?: string; // 标签（列表查询适用）
  page?: number; // 分页
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  seeMoreUrl?: string; // URL跳转
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  urlType?: number; // 跳转类型 1-URL跳转 2-内部跳转URL
  vehicleModel?: string; // 车型（列表查询适用）
  vehicleModelName?: Array<string>; // 车型（新增查询适用）
  vehicleSeries?: string; // 车系（列表查询适用）
  vehicleSeriesName?: Array<string>; // 车系（新增查询适用）
  videoDescribe?: string; // 详情内容-视频描述
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  rightsDetailedVO?: Array<RightsDetailedVO>; // RightsDetailedVO
}

/**
 * @name: ContentManagementexportContentManagement
 * @date: 2022/1/20
 * @description: 内容管理导出
 * @param: {applicableUser} [integer]
 * @param: {applicableUserName} [array]
 * @param: {bannerUrl} [string]
 * @param: {buttonName} [string]
 * @param: {classificationIds} [array]
 * @param: {classificationName} [string]
 * @param: {contentTitle} [string]
 * @param: {createdTime} [string]
 * @param: {detailsContentImageUrl} [string]
 * @param: {detailsContentType} [integer]
 * @param: {detailsContentVideoUrl} [string]
 * @param: {displayHoverButtonDetails} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {from} [integer]
 * @param: {goldCoinNumber} [integer]
 * @param: {id} [integer]
 * @param: {internalJumpUrl} [string]
 * @param: {lableManagementIds} [array]
 * @param: {lableManagementName} [string]
 * @param: {page} [integer]
 * @param: {pushContent} [integer]
 * @param: {pushImageUrl} [string]
 * @param: {pushType} [integer]
 * @param: {seeMoreUrl} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {systemRights} [string]
 * @param: {urlType} [integer]
 * @param: {vehicleModel} [string]
 * @param: {vehicleModelName} [array]
 * @param: {vehicleSeries} [string]
 * @param: {vehicleSeriesName} [array]
 * @param: {videoDescribe} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {rightsDetailedVO} [array]
 * @return: Promise<AxiosResponse<never>>
 */
export function ContentManagementexportContentManagement(parameters: Config & ContentManagementexportContentManagementParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/contentManagement/export'

  return request('get', host + path, body, $config)
}

export interface ContentManagementdeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: ContentManagementdelete
 * @date: 2022/1/20
 * @description: 删除内容管理
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ContentManagementdelete(parameters: Config & ContentManagementdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/delete'

  return request('post', host + path, body, $config)
}

export interface ContentManagementinfoParameters {
  id: number; // id
}

/**
 * @name: ContentManagementinfo
 * @date: 2022/1/20
 * @description: 内容管理详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<内容管理>>>
 */
export function ContentManagementinfo(parameters: Config & ContentManagementinfoParameters): Promise<AxiosResponse<公共响应对象<内容管理>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/info/{id}'

  return request('get', host + path, body, $config)
}

export interface ContentManagementlistParameters {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  applicableUserName?: Array<string>; // 适用用户（新增查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  bannerUrl?: string; // banner图URL
  buttonName?: string; // 按钮名称
  classificationIds?: Array<number>; // 内容分类
  classificationName?: string; // 内容分类（列表查询适用）
  contentTitle?: string; // 内容标题
  createdTime?: string; // 创建时间
  detailsContentImageUrl?: string; // 详情内容-图片URL
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideoUrl?: string; // 详情内容-视频URL
  displayHoverButtonDetails?: number; // 是否显示详情的悬浮按钮 1-显示，2-不显示
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  goldCoinNumber?: number; // 系统权益-获得金币数量
  id?: number; // 内容管理id
  internalJumpUrl?: string; // 内部跳转URL
  lableManagementIds?: Array<number>; // 标签
  lableManagementName?: string; // 标签（列表查询适用）
  page?: number; // 分页
  pushContent?: number; // 推送内容 1：推送图片 2：推送权益
  pushImageUrl?: string; // 推送图片URL
  pushType?: number; // 推送 1：观看完毕后推送 2：不推送
  seeMoreUrl?: string; // URL跳转
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  systemRights?: string; // 系统权益 1:获得金币 2:权益卡券
  urlType?: number; // 跳转类型 1-URL跳转 2-内部跳转URL
  vehicleModel?: string; // 车型（列表查询适用）
  vehicleModelName?: Array<string>; // 车型（新增查询适用）
  vehicleSeries?: string; // 车系（列表查询适用）
  vehicleSeriesName?: Array<string>; // 车系（新增查询适用）
  videoDescribe?: string; // 详情内容-视频描述
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  rightsDetailedVO?: Array<RightsDetailedVO>; // RightsDetailedVO
}

/**
 * @name: ContentManagementlist
 * @date: 2022/1/20
 * @description: 内容管理列表
 * @param: {applicableUser} [integer]
 * @param: {applicableUserName} [array]
 * @param: {bannerUrl} [string]
 * @param: {buttonName} [string]
 * @param: {classificationIds} [array]
 * @param: {classificationName} [string]
 * @param: {contentTitle} [string]
 * @param: {createdTime} [string]
 * @param: {detailsContentImageUrl} [string]
 * @param: {detailsContentType} [integer]
 * @param: {detailsContentVideoUrl} [string]
 * @param: {displayHoverButtonDetails} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {from} [integer]
 * @param: {goldCoinNumber} [integer]
 * @param: {id} [integer]
 * @param: {internalJumpUrl} [string]
 * @param: {lableManagementIds} [array]
 * @param: {lableManagementName} [string]
 * @param: {page} [integer]
 * @param: {pushContent} [integer]
 * @param: {pushImageUrl} [string]
 * @param: {pushType} [integer]
 * @param: {seeMoreUrl} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {systemRights} [string]
 * @param: {urlType} [integer]
 * @param: {vehicleModel} [string]
 * @param: {vehicleModelName} [array]
 * @param: {vehicleSeries} [string]
 * @param: {vehicleSeriesName} [array]
 * @param: {videoDescribe} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {rightsDetailedVO} [array]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<内容管理>>>>
 */
export function ContentManagementlist(parameters: Config & ContentManagementlistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<内容管理>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/list'

  return request('get', host + path, body, $config)
}

export interface ContentManagementupdateContentManagementParameters {
  contentManagementVO: ContentManagementVO; // contentManagementVO
}

/**
 * @name: ContentManagementupdateContentManagement
 * @date: 2022/1/20
 * @description: 编辑内容管理
 * @param: {contentManagementVO} [ContentManagementVO]
 * @return: Promise<AxiosResponse<公共响应对象<删除逻辑提示>>>
 */
export function ContentManagementupdateContentManagement(parameters: Config & ContentManagementupdateContentManagementParameters): Promise<AxiosResponse<公共响应对象<删除逻辑提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/contentManagement/updateContentManagement'

  return request('post', host + path, body, $config)
}

export interface DominatingScreenaddDominatingScreenParameters {
  dominatingScreenVO: DominatingScreenVO; // dominatingScreenVO
}

/**
 * @name: DominatingScreenaddDominatingScreen
 * @date: 2022/1/20
 * @description: 新增霸屏
 * @param: {dominatingScreenVO} [DominatingScreenVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function DominatingScreenaddDominatingScreen(parameters: Config & DominatingScreenaddDominatingScreenParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/addDominatingScreen'

  return request('post', host + path, body, $config)
}

export interface DominatingScreencheckDominatingScreenParameters {
  checkActivityVO: CheckActivityVO; // checkActivityVO
}

/**
 * @name: DominatingScreencheckDominatingScreen
 * @date: 2022/1/20
 * @description: 删除霸屏校验
 * @param: {checkActivityVO} [CheckActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function DominatingScreencheckDominatingScreen(parameters: Config & DominatingScreencheckDominatingScreenParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/checkDominatingScreen'

  return request('post', host + path, body, $config)
}

export interface DominatingScreendeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: DominatingScreendelete
 * @date: 2022/1/20
 * @description: 删除霸屏
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function DominatingScreendelete(parameters: Config & DominatingScreendeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/delete'

  return request('post', host + path, body, $config)
}

export interface DominatingScreenexportDominatingScreenParameters {
  activityCode?: string; // 所属活动code
  buttonImgUrl?: string; // 按钮图片url
  buttonUrl?: string; // 按钮跳转详情URL
  countDown?: number; // 倒计时（秒）
  dominatingScreenContent?: number; // 霸屏内容 1权益，2图片
  dominatingScreenName?: string; // 霸屏名称
  dominatingScreenyStatus?: number; // （查询条件）上下架状态 1-上架 2-下架 3-发布
  endCreatedTime?: string; // （查询条件）创建时间结束
  endTime?: string; // 有效期结束时间
  from?: number;
  id?: number; // 霸屏ID
  ids?: string;
  imgUrl?: string; // 图片地址
  isDisplayButton?: number; // 按钮显示1-不显示 2-显示
  page?: number; // 分页
  popFrequency?: number; // 弹出频率1-不限制每次弹出 2-仅首次弹出 3-每日首次弹出 4-领取后不再弹出
  size?: number; // 每页数量
  startCreatedTime?: string; // （查询条件）创建时间开始
  startTime?: string; // 有效期开始时间
  stationJumpImageUrl?: string; // 站内跳转-图片URL
  status?: number; // （查询条件）状态（1-未开始 2-进行中 3-已结束）
  targetUsers?: number; // 目标用户：1系统用户，2自定义用户
  triggerPosition?: number; // 触发位置1-新用户教育首页 2-用户学院首页 3-观看视频完毕后 4-提交答题后
  urlJump?: number; // 按钮跳转详情 1-站内跳转，2-站外跳转
  validityEndTime?: string; // （查询条件）有效期结束
  validityStartTime?: string; // （查询条件）有效期开始
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  dominatingScreenUserTemplate?: Array<DominatingScreenUserTemplate>; // DominatingScreenUserTemplate
  rightsDetailedVO?: RightsDetailedVO; // RightsDetailedVO
}

/**
 * @name: DominatingScreenexportDominatingScreen
 * @date: 2022/1/20
 * @description: 霸屏导出
 * @param: {activityCode} [string]
 * @param: {buttonImgUrl} [string]
 * @param: {buttonUrl} [string]
 * @param: {countDown} [integer]
 * @param: {dominatingScreenContent} [integer]
 * @param: {dominatingScreenName} [string]
 * @param: {dominatingScreenyStatus} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {ids} [string]
 * @param: {imgUrl} [string]
 * @param: {isDisplayButton} [integer]
 * @param: {page} [integer]
 * @param: {popFrequency} [integer]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {stationJumpImageUrl} [string]
 * @param: {status} [integer]
 * @param: {targetUsers} [integer]
 * @param: {triggerPosition} [integer]
 * @param: {urlJump} [integer]
 * @param: {validityEndTime} [string]
 * @param: {validityStartTime} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {dominatingScreenUserTemplate} [array]
 * @param: {rightsDetailedVO} [RightsDetailedVO]
 * @return: Promise<AxiosResponse<never>>
 */
export function DominatingScreenexportDominatingScreen(parameters: Config & DominatingScreenexportDominatingScreenParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/dominatingScreen/export'

  return request('get', host + path, body, $config)
}

export interface DominatingScreendominatingScreenImportParameters {
  file: File; // file
}

/**
 * @name: DominatingScreendominatingScreenImport
 * @date: 2022/1/20
 * @description: 霸屏自定义用户导入
 * @param: {file} [file]
 * @return: Promise<AxiosResponse<公共响应对象<ImportResult>>>
 */
export function DominatingScreendominatingScreenImport(parameters: Config & DominatingScreendominatingScreenImportParameters): Promise<AxiosResponse<公共响应对象<ImportResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/dominatingScreenImport'

  return request('post', host + path, body, $config)
}

export interface DominatingScreengetDominatingScreenUserParameters {
  id: number; // id
}

/**
 * @name: DominatingScreengetDominatingScreenUser
 * @date: 2022/1/20
 * @description: 查看目标用户
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<Array<DominatingScreenUserTemplate>>>>
 */
export function DominatingScreengetDominatingScreenUser(parameters: Config & DominatingScreengetDominatingScreenUserParameters): Promise<AxiosResponse<公共响应对象<Array<DominatingScreenUserTemplate>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/getDominatingScreenUser/{id}'

  return request('get', host + path, body, $config)
}

export interface DominatingScreeninfoParameters {
  id: number; // id
}

/**
 * @name: DominatingScreeninfo
 * @date: 2022/1/20
 * @description: 霸屏详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<霸屏>>>
 */
export function DominatingScreeninfo(parameters: Config & DominatingScreeninfoParameters): Promise<AxiosResponse<公共响应对象<霸屏>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/info/{id}'

  return request('get', host + path, body, $config)
}

export interface DominatingScreenlistParameters {
  activityCode?: string; // 所属活动code
  buttonImgUrl?: string; // 按钮图片url
  buttonUrl?: string; // 按钮跳转详情URL
  countDown?: number; // 倒计时（秒）
  dominatingScreenContent?: number; // 霸屏内容 1权益，2图片
  dominatingScreenName?: string; // 霸屏名称
  dominatingScreenyStatus?: number; // （查询条件）上下架状态 1-上架 2-下架 3-发布
  endCreatedTime?: string; // （查询条件）创建时间结束
  endTime?: string; // 有效期结束时间
  from?: number;
  id?: number; // 霸屏ID
  ids?: string;
  imgUrl?: string; // 图片地址
  isDisplayButton?: number; // 按钮显示1-不显示 2-显示
  page?: number; // 分页
  popFrequency?: number; // 弹出频率1-不限制每次弹出 2-仅首次弹出 3-每日首次弹出 4-领取后不再弹出
  size?: number; // 每页数量
  startCreatedTime?: string; // （查询条件）创建时间开始
  startTime?: string; // 有效期开始时间
  stationJumpImageUrl?: string; // 站内跳转-图片URL
  status?: number; // （查询条件）状态（1-未开始 2-进行中 3-已结束）
  targetUsers?: number; // 目标用户：1系统用户，2自定义用户
  triggerPosition?: number; // 触发位置1-新用户教育首页 2-用户学院首页 3-观看视频完毕后 4-提交答题后
  urlJump?: number; // 按钮跳转详情 1-站内跳转，2-站外跳转
  validityEndTime?: string; // （查询条件）有效期结束
  validityStartTime?: string; // （查询条件）有效期开始
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  dominatingScreenUserTemplate?: Array<DominatingScreenUserTemplate>; // DominatingScreenUserTemplate
  rightsDetailedVO?: RightsDetailedVO; // RightsDetailedVO
}

/**
 * @name: DominatingScreenlist
 * @date: 2022/1/20
 * @description: 霸屏列表
 * @param: {activityCode} [string]
 * @param: {buttonImgUrl} [string]
 * @param: {buttonUrl} [string]
 * @param: {countDown} [integer]
 * @param: {dominatingScreenContent} [integer]
 * @param: {dominatingScreenName} [string]
 * @param: {dominatingScreenyStatus} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {ids} [string]
 * @param: {imgUrl} [string]
 * @param: {isDisplayButton} [integer]
 * @param: {page} [integer]
 * @param: {popFrequency} [integer]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {stationJumpImageUrl} [string]
 * @param: {status} [integer]
 * @param: {targetUsers} [integer]
 * @param: {triggerPosition} [integer]
 * @param: {urlJump} [integer]
 * @param: {validityEndTime} [string]
 * @param: {validityStartTime} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {dominatingScreenUserTemplate} [array]
 * @param: {rightsDetailedVO} [RightsDetailedVO]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<霸屏>>>>
 */
export function DominatingScreenlist(parameters: Config & DominatingScreenlistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<霸屏>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/list'

  return request('get', host + path, body, $config)
}

/**
 * @name: DominatingScreendownloadTemplate
 * @date: 2022/1/20
 * @description: 霸屏自定义用户模板下载
 * @return: Promise<AxiosResponse<never>>
 */
export function DominatingScreendownloadTemplate(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/template'

  return request('get', host + path, body, $config)
}

export interface DominatingScreenupdateDominatingScreenParameters {
  dominatingScreenVO: DominatingScreenVO; // dominatingScreenVO
}

/**
 * @name: DominatingScreenupdateDominatingScreen
 * @date: 2022/1/20
 * @description: 编辑霸屏
 * @param: {dominatingScreenVO} [DominatingScreenVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function DominatingScreenupdateDominatingScreen(parameters: Config & DominatingScreenupdateDominatingScreenParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/updateDominatingScreen'

  return request('post', host + path, body, $config)
}

export interface DominatingScreenupdateStatusParameters {
  dominatingScreenyStatus: number; // 上下架状态
  id: number; // 霸屏id
}

/**
 * @name: DominatingScreenupdateStatus
 * @date: 2022/1/20
 * @description: 状态修改
 * @param: {dominatingScreenyStatus} [integer]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function DominatingScreenupdateStatus(parameters: Config & DominatingScreenupdateStatusParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/dominatingScreen/updateStatus'

  return request('post', host + path, body, $config)
}

export interface ExaminationPaperaddExaminationPaperParameters {
  examinationPaperVO: ExaminationPaperVO; // examinationPaperVO
}

/**
 * @name: ExaminationPaperaddExaminationPaper
 * @date: 2022/1/20
 * @description: 新增考卷
 * @param: {examinationPaperVO} [ExaminationPaperVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ExaminationPaperaddExaminationPaper(parameters: Config & ExaminationPaperaddExaminationPaperParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/addExaminationPaper'

  return request('post', host + path, body, $config)
}

export interface ExaminationPapercheckExaminationPaperParameters {
  ids: Array<number>; // ids
}

/**
 * @name: ExaminationPapercheckExaminationPaper
 * @date: 2022/1/20
 * @description: 删除考卷校验
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ExaminationPapercheckExaminationPaper(parameters: Config & ExaminationPapercheckExaminationPaperParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/checkExaminationPaper'

  return request('post', host + path, body, $config)
}

export interface ExaminationPapercheckQuestionBankParameters {
  questionBankCheckVO: QuestionBankCheckVO; // questionBankCheckVO
}

/**
 * @name: ExaminationPapercheckQuestionBank
 * @date: 2022/1/20
 * @description: 校验可行性
 * @param: {questionBankCheckVO} [QuestionBankCheckVO]
 * @return: Promise<AxiosResponse<公共响应对象<QuestionBankCheckView>>>
 */
export function ExaminationPapercheckQuestionBank(parameters: Config & ExaminationPapercheckQuestionBankParameters): Promise<AxiosResponse<公共响应对象<QuestionBankCheckView>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/checkQuestionBank'

  return request('post', host + path, body, $config)
}

export interface ExaminationPapercheckUpdateExaminationPaperParameters {
  id?: number; // id
}

/**
 * @name: ExaminationPapercheckUpdateExaminationPaper
 * @date: 2022/1/20
 * @description: 编辑校验
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ExaminationPapercheckUpdateExaminationPaper(parameters: Config & ExaminationPapercheckUpdateExaminationPaperParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/checkUpdateExaminationPaper'

  return request('get', host + path, body, $config)
}

export interface ExaminationPaperdeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: ExaminationPaperdelete
 * @date: 2022/1/20
 * @description: 删除考卷
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ExaminationPaperdelete(parameters: Config & ExaminationPaperdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/delete'

  return request('post', host + path, body, $config)
}

export interface ExaminationPaperexportExaminationPaperParameters {
  activityCode?: string; // 活动code
  additionalAnswerOpportunity?: number; // 额外答题机会 1-允许 2-每次分享后可获得几次答题机会 3-每次分享后，可获得几次答题机会，但最多可获得几次机会 4-第一次分享后，可额外获得几次答题机会
  answerAgainSetting?: number; // 再次答题设置：1-再次答题与上次题目保持一致 2-再次答题重新从题库中随机选择
  answerNumber?: number; // 答题数量
  answerOpportunityNumber?: number; // 额外答题机会次数
  answerSort?: number; // 答题顺序:1-随机 2-按题库顺序
  answerTime?: number; // 答题时间限制(秒)
  answerTotalScore?: number; // 答题总分
  endCreatedTime?: string; // 创建时间结束
  endTime?: string; // 考卷有效期结束时间
  examinationPaperStatus?: number; // 当前上下架状态（1-上架 2-下架）
  examinationPaperTitle?: string; // 考卷标题
  from?: number;
  id?: number; // 考卷id
  ids?: string;
  maxFraction?: number; // 最大分数
  minFraction?: number; // 最小分数
  mostAnswerOpportunityNumber?: number; // 对应-额外答题机会3：最多可获得答题机会
  page?: number; // 分页
  questionBankId?: string; // 选择题库(以逗号隔开)
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  startTime?: string; // 考卷有效期开始时间
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
  userDefaultAnswerOpportunity?: number; // 用户默认答题机会次数
  validityEndTime?: string; // （查询条件）考卷有效期结束
  validityStartTime?: string; // （查询条件）考卷有效期开始
  examinationPaperPrizeSettingVO?: Array<ExaminationPaperPrizeSettingVO>; // ExaminationPaperPrizeSettingVO
}

/**
 * @name: ExaminationPaperexportExaminationPaper
 * @date: 2022/1/20
 * @description: 考卷导出
 * @param: {activityCode} [string]
 * @param: {additionalAnswerOpportunity} [integer]
 * @param: {answerAgainSetting} [integer]
 * @param: {answerNumber} [integer]
 * @param: {answerOpportunityNumber} [integer]
 * @param: {answerSort} [integer]
 * @param: {answerTime} [integer]
 * @param: {answerTotalScore} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {examinationPaperStatus} [integer]
 * @param: {examinationPaperTitle} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {ids} [string]
 * @param: {maxFraction} [integer]
 * @param: {minFraction} [integer]
 * @param: {mostAnswerOpportunityNumber} [integer]
 * @param: {page} [integer]
 * @param: {questionBankId} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @param: {userDefaultAnswerOpportunity} [integer]
 * @param: {validityEndTime} [string]
 * @param: {validityStartTime} [string]
 * @param: {examinationPaperPrizeSettingVO} [array]
 * @return: Promise<AxiosResponse<never>>
 */
export function ExaminationPaperexportExaminationPaper(parameters: Config & ExaminationPaperexportExaminationPaperParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/export'

  return request('get', host + path, body, $config)
}

export interface ExaminationPaperinfoParameters {
  id: number; // id
}

/**
 * @name: ExaminationPaperinfo
 * @date: 2022/1/20
 * @description: 考卷详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<考卷数据>>>
 */
export function ExaminationPaperinfo(parameters: Config & ExaminationPaperinfoParameters): Promise<AxiosResponse<公共响应对象<考卷数据>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/info/{id}'

  return request('get', host + path, body, $config)
}

export interface ExaminationPaperlistParameters {
  activityCode?: string; // 活动code
  additionalAnswerOpportunity?: number; // 额外答题机会 1-允许 2-每次分享后可获得几次答题机会 3-每次分享后，可获得几次答题机会，但最多可获得几次机会 4-第一次分享后，可额外获得几次答题机会
  answerAgainSetting?: number; // 再次答题设置：1-再次答题与上次题目保持一致 2-再次答题重新从题库中随机选择
  answerNumber?: number; // 答题数量
  answerOpportunityNumber?: number; // 额外答题机会次数
  answerSort?: number; // 答题顺序:1-随机 2-按题库顺序
  answerTime?: number; // 答题时间限制(秒)
  answerTotalScore?: number; // 答题总分
  endCreatedTime?: string; // 创建时间结束
  endTime?: string; // 考卷有效期结束时间
  examinationPaperStatus?: number; // 当前上下架状态（1-上架 2-下架）
  examinationPaperTitle?: string; // 考卷标题
  from?: number;
  id?: number; // 考卷id
  ids?: string;
  maxFraction?: number; // 最大分数
  minFraction?: number; // 最小分数
  mostAnswerOpportunityNumber?: number; // 对应-额外答题机会3：最多可获得答题机会
  page?: number; // 分页
  questionBankId?: string; // 选择题库(以逗号隔开)
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  startTime?: string; // 考卷有效期开始时间
  status?: number; // 状态（1-未开始 2-进行中 3-已结束）
  userDefaultAnswerOpportunity?: number; // 用户默认答题机会次数
  validityEndTime?: string; // （查询条件）考卷有效期结束
  validityStartTime?: string; // （查询条件）考卷有效期开始
  examinationPaperPrizeSettingVO?: Array<ExaminationPaperPrizeSettingVO>; // ExaminationPaperPrizeSettingVO
}

/**
 * @name: ExaminationPaperlist
 * @date: 2022/1/20
 * @description: 考卷列表
 * @param: {activityCode} [string]
 * @param: {additionalAnswerOpportunity} [integer]
 * @param: {answerAgainSetting} [integer]
 * @param: {answerNumber} [integer]
 * @param: {answerOpportunityNumber} [integer]
 * @param: {answerSort} [integer]
 * @param: {answerTime} [integer]
 * @param: {answerTotalScore} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {examinationPaperStatus} [integer]
 * @param: {examinationPaperTitle} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {ids} [string]
 * @param: {maxFraction} [integer]
 * @param: {minFraction} [integer]
 * @param: {mostAnswerOpportunityNumber} [integer]
 * @param: {page} [integer]
 * @param: {questionBankId} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @param: {userDefaultAnswerOpportunity} [integer]
 * @param: {validityEndTime} [string]
 * @param: {validityStartTime} [string]
 * @param: {examinationPaperPrizeSettingVO} [array]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<考卷数据>>>>
 */
export function ExaminationPaperlist(parameters: Config & ExaminationPaperlistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<考卷数据>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/list'

  return request('get', host + path, body, $config)
}

export interface ExaminationPaperupdateExaminationPaperParameters {
  examinationPaperVO: ExaminationPaperVO; // examinationPaperVO
}

/**
 * @name: ExaminationPaperupdateExaminationPaper
 * @date: 2022/1/20
 * @description: 编辑考卷
 * @param: {examinationPaperVO} [ExaminationPaperVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ExaminationPaperupdateExaminationPaper(parameters: Config & ExaminationPaperupdateExaminationPaperParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/updateExaminationPaper'

  return request('post', host + path, body, $config)
}

export interface ExaminationPaperupdateStatusParameters {
  activityCode: string; // 活动code
  examinationPaperStatus: number; // 上下架状态
  id: number; // 考卷id
}

/**
 * @name: ExaminationPaperupdateStatus
 * @date: 2022/1/20
 * @description: 状态修改
 * @param: {activityCode} [string]
 * @param: {examinationPaperStatus} [integer]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ExaminationPaperupdateStatus(parameters: Config & ExaminationPaperupdateStatusParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/examinationPaper/updateStatus'

  return request('post', host + path, body, $config)
}

export interface ExtensionActivityaddExtensionActivityParameters {
  extensionActivityVO: ExtensionActivityVO; // extensionActivityVO
}

/**
 * @name: ExtensionActivityaddExtensionActivity
 * @date: 2022/1/20
 * @description: 新增推广活动
 * @param: {extensionActivityVO} [ExtensionActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ExtensionActivityaddExtensionActivity(parameters: Config & ExtensionActivityaddExtensionActivityParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/addExtensionActivity'

  return request('post', host + path, body, $config)
}

export interface ExtensionActivitycheckExtensionActivityParameters {
  checkActivityVO: CheckActivityVO; // checkActivityVO
}

/**
 * @name: ExtensionActivitycheckExtensionActivity
 * @date: 2022/1/20
 * @description: 删除推广活动校验
 * @param: {checkActivityVO} [CheckActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ExtensionActivitycheckExtensionActivity(parameters: Config & ExtensionActivitycheckExtensionActivityParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/checkExtensionActivity'

  return request('post', host + path, body, $config)
}

export interface ExtensionActivitydeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: ExtensionActivitydelete
 * @date: 2022/1/20
 * @description: 删除推广活动
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ExtensionActivitydelete(parameters: Config & ExtensionActivitydeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/delete'

  return request('post', host + path, body, $config)
}

export interface ExtensionActivityexportExtensionActivityParameters {
  activityCode?: string; // 所属活动code
  bannerImageUrl?: string; // banner图URL
  bannerVideoUrl?: string; // banner视频URL
  buttonImageUrl?: string; // 按钮图片跳转
  buttonName?: string; // 按钮名称
  buttonUrl?: string; // 按钮跳转
  createdTime?: string; // 创建时间
  detailsContentImage?: string; // 详情内容图片
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideo?: string; // 详情内容视频
  endCreatedTime?: string; // 创建时间结束（列表查询使用）
  extensionActivityStatus?: number; // 上下架状态 1-上架 2-下架 3-未发布
  from?: number;
  id?: number; // 推广活动id
  isDisplayButton?: number; // 是否显示详情的悬浮按钮 1-不显示 2-显示
  linkUrl?: string; // 跳转链接Url
  page?: number; // 分页
  promotionTitle?: string; // 推广标题
  promotionType?: number; // 推广类型 1-活跃活动 2-市场推广
  rewardIntegral?: number; // 奖励积分数量
  rightsGive?: string; // 权益赠送（仅首次) 1-奖励积分 2-奖励卡券
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始（列表查询使用）
  understandDetails?: number; // 了解详情 1-站内详情 2-站外详情
  urlJump?: number; // 1-URL跳转 2-内部跳转
  videoDescribe?: string; // 详情内容-视频描述
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  rightsDetailedVO?: RightsDetailedVO; // RightsDetailedVO
}

/**
 * @name: ExtensionActivityexportExtensionActivity
 * @date: 2022/1/20
 * @description: 推广活动导出
 * @param: {activityCode} [string]
 * @param: {bannerImageUrl} [string]
 * @param: {bannerVideoUrl} [string]
 * @param: {buttonImageUrl} [string]
 * @param: {buttonName} [string]
 * @param: {buttonUrl} [string]
 * @param: {createdTime} [string]
 * @param: {detailsContentImage} [string]
 * @param: {detailsContentType} [integer]
 * @param: {detailsContentVideo} [string]
 * @param: {endCreatedTime} [string]
 * @param: {extensionActivityStatus} [integer]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {isDisplayButton} [integer]
 * @param: {linkUrl} [string]
 * @param: {page} [integer]
 * @param: {promotionTitle} [string]
 * @param: {promotionType} [integer]
 * @param: {rewardIntegral} [integer]
 * @param: {rightsGive} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {understandDetails} [integer]
 * @param: {urlJump} [integer]
 * @param: {videoDescribe} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {rightsDetailedVO} [RightsDetailedVO]
 * @return: Promise<AxiosResponse<never>>
 */
export function ExtensionActivityexportExtensionActivity(parameters: Config & ExtensionActivityexportExtensionActivityParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/extensionActivity/export'

  return request('get', host + path, body, $config)
}

export interface ExtensionActivityinfoParameters {
  id: number; // id
}

/**
 * @name: ExtensionActivityinfo
 * @date: 2022/1/20
 * @description: 推广活动详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<ExtensionActivityView>>>
 */
export function ExtensionActivityinfo(parameters: Config & ExtensionActivityinfoParameters): Promise<AxiosResponse<公共响应对象<ExtensionActivityView>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/info/{id}'

  return request('get', host + path, body, $config)
}

export interface ExtensionActivitylistParameters {
  activityCode?: string; // 所属活动code
  bannerImageUrl?: string; // banner图URL
  bannerVideoUrl?: string; // banner视频URL
  buttonImageUrl?: string; // 按钮图片跳转
  buttonName?: string; // 按钮名称
  buttonUrl?: string; // 按钮跳转
  createdTime?: string; // 创建时间
  detailsContentImage?: string; // 详情内容图片
  detailsContentType?: number; // 详情内容 1-单视频,2-视频+图片,3-单图片
  detailsContentVideo?: string; // 详情内容视频
  endCreatedTime?: string; // 创建时间结束（列表查询使用）
  extensionActivityStatus?: number; // 上下架状态 1-上架 2-下架 3-未发布
  from?: number;
  id?: number; // 推广活动id
  isDisplayButton?: number; // 是否显示详情的悬浮按钮 1-不显示 2-显示
  linkUrl?: string; // 跳转链接Url
  page?: number; // 分页
  promotionTitle?: string; // 推广标题
  promotionType?: number; // 推广类型 1-活跃活动 2-市场推广
  rewardIntegral?: number; // 奖励积分数量
  rightsGive?: string; // 权益赠送（仅首次) 1-奖励积分 2-奖励卡券
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始（列表查询使用）
  understandDetails?: number; // 了解详情 1-站内详情 2-站外详情
  urlJump?: number; // 1-URL跳转 2-内部跳转
  videoDescribe?: string; // 详情内容-视频描述
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
  rightsDetailedVO?: RightsDetailedVO; // RightsDetailedVO
}

/**
 * @name: ExtensionActivitylist
 * @date: 2022/1/20
 * @description: 推广活动列表
 * @param: {activityCode} [string]
 * @param: {bannerImageUrl} [string]
 * @param: {bannerVideoUrl} [string]
 * @param: {buttonImageUrl} [string]
 * @param: {buttonName} [string]
 * @param: {buttonUrl} [string]
 * @param: {createdTime} [string]
 * @param: {detailsContentImage} [string]
 * @param: {detailsContentType} [integer]
 * @param: {detailsContentVideo} [string]
 * @param: {endCreatedTime} [string]
 * @param: {extensionActivityStatus} [integer]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {isDisplayButton} [integer]
 * @param: {linkUrl} [string]
 * @param: {page} [integer]
 * @param: {promotionTitle} [string]
 * @param: {promotionType} [integer]
 * @param: {rewardIntegral} [integer]
 * @param: {rightsGive} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {understandDetails} [integer]
 * @param: {urlJump} [integer]
 * @param: {videoDescribe} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @param: {rightsDetailedVO} [RightsDetailedVO]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<ExtensionActivityView>>>>
 */
export function ExtensionActivitylist(parameters: Config & ExtensionActivitylistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<ExtensionActivityView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/list'

  return request('get', host + path, body, $config)
}

export interface ExtensionActivityupdateExtensionActivityParameters {
  extensionActivityVO: ExtensionActivityVO; // extensionActivityVO
}

/**
 * @name: ExtensionActivityupdateExtensionActivity
 * @date: 2022/1/20
 * @description: 编辑推广活动
 * @param: {extensionActivityVO} [ExtensionActivityVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ExtensionActivityupdateExtensionActivity(parameters: Config & ExtensionActivityupdateExtensionActivityParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/updateExtensionActivity'

  return request('post', host + path, body, $config)
}

export interface ExtensionActivityupdateStatusParameters {
  extensionActivityStatus: number; // 上下架状态
  id: number; // 推广活动id
}

/**
 * @name: ExtensionActivityupdateStatus
 * @date: 2022/1/20
 * @description: 状态修改
 * @param: {extensionActivityStatus} [integer]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ExtensionActivityupdateStatus(parameters: Config & ExtensionActivityupdateStatusParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/extensionActivity/updateStatus'

  return request('post', host + path, body, $config)
}

export interface ApproveapplicationDetailsParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApproveapplicationDetails
 * @date: 2022/1/20
 * @description: 申请明细
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApproveapplicationDetails(parameters: Config & ApproveapplicationDetailsParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/applicationDetails'

  return request('post', host + path, body, $config)
}

export interface ApprovecheckReturnWarehouseParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApprovecheckReturnWarehouse
 * @date: 2022/1/20
 * @description: 退回仓库校验
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function ApprovecheckReturnWarehouse(parameters: Config & ApprovecheckReturnWarehouseParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/checkReturnWarehouse'

  return request('post', host + path, body, $config)
}

export interface ApprovecommitParameters {
  approveCommitRequest: 申请单的查询<申请单权益查询和新增>; // approveCommitRequest
}

/**
 * @name: Approvecommit
 * @date: 2022/1/20
 * @description: 用于物资申请
 * @param: {approveCommitRequest} [申请单的查询<申请单权益查询和新增>]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function Approvecommit(parameters: Config & ApprovecommitParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/commit'

  return request('post', host + path, body, $config)
}

export interface ApprovedeleteGoodsApproveParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApprovedeleteGoodsApprove
 * @date: 2022/1/20
 * @description: 物资审批-删除
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApprovedeleteGoodsApprove(parameters: Config & ApprovedeleteGoodsApproveParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/deleteGoodsApprove'

  return request('post', host + path, body, $config)
}

export interface ApprovegetGoodsApproveInfoParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApprovegetGoodsApproveInfo
 * @date: 2022/1/20
 * @description: 重新申请
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApprovegetGoodsApproveInfo(parameters: Config & ApprovegetGoodsApproveInfoParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/getGoodsApproveInfo'

  return request('get', host + path, body, $config)
}

export interface ApprovegoodsApproveAgreeParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApprovegoodsApproveAgree
 * @date: 2022/1/20
 * @description: 物资审批-同意
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApprovegoodsApproveAgree(parameters: Config & ApprovegoodsApproveAgreeParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/goodsApproveAgree'

  return request('post', host + path, body, $config)
}

export interface ApprovegoodsApproveRefuseParameters {
  approveId: string; // 审批id
  approveReason: string; // 拒绝原因
  userId?: string;
}

/**
 * @name: ApprovegoodsApproveRefuse
 * @date: 2022/1/20
 * @description: 物资审批-拒绝
 * @param: {approveId} [string]
 * @param: {approveReason} [string]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApprovegoodsApproveRefuse(parameters: Config & ApprovegoodsApproveRefuseParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/goodsApproveRefuse'

  return request('post', host + path, body, $config)
}

export interface ApprovelistParameters {
  activityCode?: string; // 所属活动
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  approveBy?: string; // 审核人
  approveEndTime?: string; // 审核结束时间
  approveStartTime?: string; // 审核起始时间
  author?: string; // 申请人
  endTime?: string; // 结束时间
  from?: number;
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  returnBy?: string; // 回库人
  returnEndTime?: string; // 回库结束时间
  returnStartTime?: string; // 回库起始时间
  rightName?: string; // 权益名称
  rightType?: string; // 权益类型
  startTime?: string; // 起始时间
  status?: number; // 活动状态 1-未开始，2-进行中，3-已结束
  userId?: string;
  viewType: string; // 页面类型 0-待审核 1-待处理 2-已处理 3-已通过 4-已驳回 5-（采购端）已完结 6-（运营端）已完结 
}

/**
 * @name: Approvelist
 * @date: 2022/1/20
 * @description: 用于查看物资申请的待审核列表
 * @param: {activityCode} [string]
 * @param: {activityProject} [integer]
 * @param: {approveBy} [string]
 * @param: {approveEndTime} [string]
 * @param: {approveStartTime} [string]
 * @param: {author} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {returnBy} [string]
 * @param: {returnEndTime} [string]
 * @param: {returnStartTime} [string]
 * @param: {rightName} [string]
 * @param: {rightType} [string]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @param: {userId} [string]
 * @param: {viewType} [string]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<审核列表实体>>>>
 */
export function Approvelist(parameters: Config & ApprovelistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<审核列表实体>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/list'

  return request('get', host + path, body, $config)
}

export interface ApprovequeryParameters {
  activityCode?: string; // 活动Code
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
}

/**
 * @name: Approvequery
 * @date: 2022/1/20
 * @description: 用于物资申请的查询
 * @param: {activityCode} [string]
 * @param: {activityProject} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<Array<申请单权益查询和新增>>>>
 */
export function Approvequery(parameters: Config & ApprovequeryParameters): Promise<AxiosResponse<公共响应对象<Array<申请单权益查询和新增>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/query'

  return request('get', host + path, body, $config)
}

export interface ApprovequeryApproveTotalParameters {
  approveType: number; // 类型 1-采购端 2-运营端
  userId?: string;
}

/**
 * @name: ApprovequeryApproveTotal
 * @date: 2022/1/20
 * @description: 审批列表总数查询
 * @param: {approveType} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<审核列表总数统计>>>
 */
export function ApprovequeryApproveTotal(parameters: Config & ApprovequeryApproveTotalParameters): Promise<AxiosResponse<公共响应对象<审核列表总数统计>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/queryApproveTotal'

  return request('get', host + path, body, $config)
}

export interface ApprovequeryGoodsApproveParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApprovequeryGoodsApprove
 * @date: 2022/1/20
 * @description: 物资审批查询
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<申请单的审批查询<申请单权益查询和新增>>>>
 */
export function ApprovequeryGoodsApprove(parameters: Config & ApprovequeryGoodsApproveParameters): Promise<AxiosResponse<公共响应对象<申请单的审批查询<申请单权益查询和新增>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/queryGoodsApprove'

  return request('get', host + path, body, $config)
}

export interface ApprovereturnWarehouseParameters {
  activityCode: string; // 所属活动code
  approveCesc: string; // 回库原因
  approveId: string; // 审批id
  approvePic?: string; // 申请凭证的图片url
  userId?: string;
}

/**
 * @name: ApprovereturnWarehouse
 * @date: 2022/1/20
 * @description: 退回仓库
 * @param: {activityCode} [string]
 * @param: {approveCesc} [string]
 * @param: {approveId} [string]
 * @param: {approvePic} [string]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApprovereturnWarehouse(parameters: Config & ApprovereturnWarehouseParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/returnWarehouse'

  return request('post', host + path, body, $config)
}

export interface ApprovewithdrawCommitParameters {
  activityCode: string; // 所属活动code
  approveId: string; // 审批id
  rightId?: number; // 权益id
  userId?: string;
}

/**
 * @name: ApprovewithdrawCommit
 * @date: 2022/1/20
 * @description: 撤回申请
 * @param: {activityCode} [string]
 * @param: {approveId} [string]
 * @param: {rightId} [integer]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ApprovewithdrawCommit(parameters: Config & ApprovewithdrawCommitParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/approve/withdrawCommit'

  return request('post', host + path, body, $config)
}

export interface CoupondeleteParameters {
  rightDeleteRequest: 券码删除请求; // rightDeleteRequest
}

/**
 * @name: Coupondelete
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的券码删除
 * @param: {rightDeleteRequest} [券码删除请求]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function Coupondelete(parameters: Config & CoupondeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/delete'

  return request('post', host + path, body, $config)
}

export interface CouponexportRightParameters {
  approveId?: string; // 审批id
  backEndTime?: string; // 回库结束时间
  backStartTime?: string; // 回库开始时间
  code?: string; // 券码
  drawEndTime?: string; // 领取结束时间
  drawStartTime?: string; // 领取开始时间
  from?: number;
  goodsPoolId: number; // 权益池id
  goodsPoolIds?: string; // 权益池id集合
  importEndTime?: string; // 导入结束时间
  importStartTime?: string; // 导入开始时间
  isBack?: number; // 是否回库 0-否 1-是
  isDraw?: number; // 是否领取 0-否 1-是
  isLock?: number; // 是否锁定 0-否 1-是
  lifeCycle?: number;
  lockEndTime?: string; // 锁定结束时间
  lockStartTime?: string; // 锁定开始时间
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  phone?: string; // 手机号码
  poolType: number; // 0-公共库 1-活动库
  rightId: number; // 权益id
  type: string; // 券码明细操作类型 0-物资管理 1-物资审批
  validEndTime?: string; // 有效期结束时间
  validStartTime?: string; // 有效期开始时间
  viewType?: string; // 页面类型 0-待审核 1-待处理 2-已处理 3-已通过 4-已驳回 5-（采购端）已完结 6-（运营端）已完结 
}

/**
 * @name: CouponexportRight
 * @date: 2022/1/20
 * @description: 券码明细导出
 * @param: {approveId} [string]
 * @param: {backEndTime} [string]
 * @param: {backStartTime} [string]
 * @param: {code} [string]
 * @param: {drawEndTime} [string]
 * @param: {drawStartTime} [string]
 * @param: {from} [integer]
 * @param: {goodsPoolId} [integer]
 * @param: {goodsPoolIds} [string]
 * @param: {importEndTime} [string]
 * @param: {importStartTime} [string]
 * @param: {isBack} [integer]
 * @param: {isDraw} [integer]
 * @param: {isLock} [integer]
 * @param: {lifeCycle} [integer]
 * @param: {lockEndTime} [string]
 * @param: {lockStartTime} [string]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {phone} [string]
 * @param: {poolType} [integer]
 * @param: {rightId} [integer]
 * @param: {type} [string]
 * @param: {validEndTime} [string]
 * @param: {validStartTime} [string]
 * @param: {viewType} [string]
 * @return: Promise<AxiosResponse<never>>
 */
export function CouponexportRight(parameters: Config & CouponexportRightParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/export'

  return request('get', host + path, body, $config)
}

export interface CouponimportRightParameters {
  activityCode?: string; // 所属活动code
  poolType: number; // 0-公共库 1-活动库
  sessionId: number; // sessionId
}

/**
 * @name: CouponimportRight
 * @date: 2022/1/20
 * @description: 用于券码明细页面的导入确认
 * @param: {activityCode} [string]
 * @param: {poolType} [integer]
 * @param: {sessionId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function CouponimportRight(parameters: Config & CouponimportRightParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/import'

  return request('post', host + path, body, $config)
}

export interface CouponlistParameters {
  approveId?: string; // 审批id
  backEndTime?: string; // 回库结束时间
  backStartTime?: string; // 回库开始时间
  code?: string; // 券码
  drawEndTime?: string; // 领取结束时间
  drawStartTime?: string; // 领取开始时间
  from?: number;
  goodsPoolId: number; // 权益池id
  goodsPoolIds?: string; // 权益池id集合
  importEndTime?: string; // 导入结束时间
  importStartTime?: string; // 导入开始时间
  isBack?: number; // 是否回库 0-否 1-是
  isDraw?: number; // 是否领取 0-否 1-是
  isLock?: number; // 是否锁定 0-否 1-是
  lifeCycle?: number;
  lockEndTime?: string; // 锁定结束时间
  lockStartTime?: string; // 锁定开始时间
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  phone?: string; // 手机号码
  poolType: number; // 0-公共库 1-活动库
  rightId: number; // 权益id
  type: string; // 券码明细操作类型 0-物资管理 1-物资审批
  validEndTime?: string; // 有效期结束时间
  validStartTime?: string; // 有效期开始时间
  viewType?: string; // 页面类型 0-待审核 1-待处理 2-已处理 3-已通过 4-已驳回 5-（采购端）已完结 6-（运营端）已完结 
}

/**
 * @name: Couponlist
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的券码明细查询
 * @param: {approveId} [string]
 * @param: {backEndTime} [string]
 * @param: {backStartTime} [string]
 * @param: {code} [string]
 * @param: {drawEndTime} [string]
 * @param: {drawStartTime} [string]
 * @param: {from} [integer]
 * @param: {goodsPoolId} [integer]
 * @param: {goodsPoolIds} [string]
 * @param: {importEndTime} [string]
 * @param: {importStartTime} [string]
 * @param: {isBack} [integer]
 * @param: {isDraw} [integer]
 * @param: {isLock} [integer]
 * @param: {lifeCycle} [integer]
 * @param: {lockEndTime} [string]
 * @param: {lockStartTime} [string]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {phone} [string]
 * @param: {poolType} [integer]
 * @param: {rightId} [integer]
 * @param: {type} [string]
 * @param: {validEndTime} [string]
 * @param: {validStartTime} [string]
 * @param: {viewType} [string]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<券码明细列表>>>>
 */
export function Couponlist(parameters: Config & CouponlistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<券码明细列表>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/list'

  return request('get', host + path, body, $config)
}

export interface CouponpreimportParameters {
  file: File; // file
  goodsPoolId: number; // 权益池Id
  rightId: number; // 权益Id
}

/**
 * @name: Couponpreimport
 * @date: 2022/1/20
 * @description: 用于券码明细页面的预导入
 * @param: {file} [file]
 * @param: {goodsPoolId} [integer]
 * @param: {rightId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PreImportResult>>>
 */
export function Couponpreimport(parameters: Config & CouponpreimportParameters): Promise<AxiosResponse<公共响应对象<PreImportResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/preimport'

  return request('post', host + path, body, $config)
}

export interface CouponqueryRightTotalParameters {
  approveId: string; // approveId
  goodsPoolId: number; // goodsPoolId
  rightId: number; // rightId
  type: string; // 券码明细操作类型 0-物资管理 1-物资审批
}

/**
 * @name: CouponqueryRightTotal
 * @date: 2022/1/20
 * @description: 券码总数、已领取、库存锁定查询
 * @param: {approveId} [string]
 * @param: {goodsPoolId} [integer]
 * @param: {rightId} [integer]
 * @param: {type} [string]
 * @return: Promise<AxiosResponse<公共响应对象<券码明细列表券码数统计>>>
 */
export function CouponqueryRightTotal(parameters: Config & CouponqueryRightTotalParameters): Promise<AxiosResponse<公共响应对象<券码明细列表券码数统计>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/queryRightTotal'

  return request('get', host + path, body, $config)
}

/**
 * @name: Coupontemplate
 * @date: 2022/1/20
 * @description: 用于券码明细页面的模板下载
 * @return: Promise<AxiosResponse<never>>
 */
export function Coupontemplate(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/template'

  return request('get', host + path, body, $config)
}

export interface CoupontraceParameters {
  code: string; // 券码
}

/**
 * @name: Coupontrace
 * @date: 2022/1/20
 * @description: 公共库的券码路径
 * @param: {code} [string]
 * @return: Promise<AxiosResponse<公共响应对象<Array<券码路径列表>>>>
 */
export function Coupontrace(parameters: Config & CoupontraceParameters): Promise<AxiosResponse<公共响应对象<Array<券码路径列表>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/coupon/trace'

  return request('get', host + path, body, $config)
}

export interface ReceivelockProductParameters {
  request: 券码领取; // request
}

/**
 * @name: ReceivelockProduct
 * @date: 2022/1/20
 * @description: 商品锁库存
 * @param: {request} [券码领取]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function ReceivelockProduct(parameters: Config & ReceivelockProductParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/receive/order/lock'

  return request('post', host + path, body, $config)
}

export interface ReceivereleaseProductParameters {
  orderId?: string; // orderId
}

/**
 * @name: ReceivereleaseProduct
 * @date: 2022/1/20
 * @description: 商品释放库存
 * @param: {orderId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function ReceivereleaseProduct(parameters: Config & ReceivereleaseProductParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/receive/order/release'

  return request('get', host + path, body, $config)
}

export interface ReceiveproductInfoParameters {
  activityCode?: string; // activityCode
  id?: number; // id
}

/**
 * @name: ReceiveproductInfo
 * @date: 2022/1/20
 * @description: 权益商品信息,校验权益信息
 * @param: {activityCode} [string]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<RightProductOutDetailView>>>
 */
export function ReceiveproductInfo(parameters: Config & ReceiveproductInfoParameters): Promise<AxiosResponse<公共响应对象<RightProductOutDetailView>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/receive/right-product/info'

  return request('get', host + path, body, $config)
}

export interface ReceiveproductInfoForAdminParameters {
  skuIds?: Array<number>; // skuIds
}

/**
 * @name: ReceiveproductInfoForAdmin
 * @date: 2022/1/20
 * @description: 同步执行权益领取信息列表
 * @param: {skuIds} [array]
 * @return: Promise<AxiosResponse<公共响应对象<Array<RightProductOutDetailView>>>>
 */
export function ReceiveproductInfoForAdmin(parameters: Config & ReceiveproductInfoForAdminParameters): Promise<AxiosResponse<公共响应对象<Array<RightProductOutDetailView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/receive/right-product/infos'

  return request('get', host + path, body, $config)
}

export interface ReceiveoutRightProductParameters {
  orderId?: string; // orderId
}

/**
 * @name: ReceiveoutRightProduct
 * @date: 2022/1/20
 * @description: 商品出库
 * @param: {orderId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function ReceiveoutRightProduct(parameters: Config & ReceiveoutRightProductParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/receive/right-product/out'

  return request('get', host + path, body, $config)
}

export interface ReceiveoutRightProductDetailParameters {
  orderId: string; // orderId
}

/**
 * @name: ReceiveoutRightProductDetail
 * @date: 2022/1/20
 * @description: 券码出库明细
 * @param: {orderId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<Array<RightProductOutDetailView>>>>
 */
export function ReceiveoutRightProductDetail(parameters: Config & ReceiveoutRightProductDetailParameters): Promise<AxiosResponse<公共响应对象<Array<RightProductOutDetailView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/receive/right-product/out/detail'

  return request('get', host + path, body, $config)
}

/**
 * @name: RightMgtlistActs
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的新增权益
 * @return: Promise<AxiosResponse<公共响应对象<Array<活动列表>>>>
 */
export function RightMgtlistActs(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<活动列表>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/activity'

  return request('get', host + path, body, $config)
}

export interface RightMgtaddParameters {
  request: 新增权益请求; // request
}

/**
 * @name: RightMgtadd
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的新增权益
 * @param: {request} [新增权益请求]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function RightMgtadd(parameters: Config & RightMgtaddParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/add'

  return request('post', host + path, body, $config)
}

export interface RightMgtcheckDeleteParameters {
  goodsPoolId: number; // goodsPoolId
  rightId: number; // rightId
}

/**
 * @name: RightMgtcheckDelete
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的权益删除检验
 * @param: {goodsPoolId} [integer]
 * @param: {rightId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function RightMgtcheckDelete(parameters: Config & RightMgtcheckDeleteParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/checkDelete'

  return request('post', host + path, body, $config)
}

export interface RightMgtdeleteParameters {
  goodsPoolId: number; // goodsPoolId
  rightId: number; // rightId
}

/**
 * @name: RightMgtdelete
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的权益删除
 * @param: {goodsPoolId} [integer]
 * @param: {rightId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function RightMgtdelete(parameters: Config & RightMgtdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/delete'

  return request('post', host + path, body, $config)
}

export interface RightMgteditParameters {
  request: 编辑权益请求; // request
}

/**
 * @name: RightMgtedit
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的权益编辑
 * @param: {request} [编辑权益请求]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function RightMgtedit(parameters: Config & RightMgteditParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/edit'

  return request('post', host + path, body, $config)
}

export interface RightMgtexportRightParameters {
  activityCode?: string; // 所属活动
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  author?: string; // 创建者
  endTime?: string; // 结束时间
  from?: number;
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  poolType: number; // 0-公共库 1-活动库
  rightName?: string; // 权益名称
  rightType?: number; // 权益类型 0-权益 2-实物奖品
  startTime?: string; // 起始时间
  status?: number; // 状态 1-未开始，2-进行中，3-已结束
}

/**
 * @name: RightMgtexportRight
 * @date: 2022/1/20
 * @description: 物资管理导出
 * @param: {activityCode} [string]
 * @param: {activityProject} [integer]
 * @param: {author} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {poolType} [integer]
 * @param: {rightName} [string]
 * @param: {rightType} [integer]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @return: Promise<AxiosResponse<never>>
 */
export function RightMgtexportRight(parameters: Config & RightMgtexportRightParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/export'

  return request('get', host + path, body, $config)
}

export interface RightMgtinfoParameters {
  id: number; // id
}

/**
 * @name: RightMgtinfo
 * @date: 2022/1/20
 * @description: 权益详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<权益列表>>>
 */
export function RightMgtinfo(parameters: Config & RightMgtinfoParameters): Promise<AxiosResponse<公共响应对象<权益列表>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/info/{id}'

  return request('get', host + path, body, $config)
}

export interface RightMgtlistRightParameters {
  activityCode?: string; // 所属活动
  activityProject?: number; // 所属项目 一汽大众：1，捷达：2，奥迪：3
  author?: string; // 创建者
  endTime?: string; // 结束时间
  from?: number;
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  poolType: number; // 0-公共库 1-活动库
  rightName?: string; // 权益名称
  rightType?: number; // 权益类型 0-权益 2-实物奖品
  startTime?: string; // 起始时间
  status?: number; // 状态 1-未开始，2-进行中，3-已结束
}

/**
 * @name: RightMgtlistRight
 * @date: 2022/1/20
 * @description: 用于活动库/公共库的权益查询
 * @param: {activityCode} [string]
 * @param: {activityProject} [integer]
 * @param: {author} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {poolType} [integer]
 * @param: {rightName} [string]
 * @param: {rightType} [integer]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<权益列表>>>>
 */
export function RightMgtlistRight(parameters: Config & RightMgtlistRightParameters): Promise<AxiosResponse<公共响应对象<PageUtils<权益列表>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/right/list-right'

  return request('get', host + path, body, $config)
}

export interface RightMgtTypeaddParameters {
  request: 权益类型请求; // request
}

/**
 * @name: RightMgtTypeadd
 * @date: 2022/1/20
 * @description: 新增权益类型
 * @param: {request} [权益类型请求]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function RightMgtTypeadd(parameters: Config & RightMgtTypeaddParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/rightType/add'

  return request('post', host + path, body, $config)
}

export interface RightMgtTypedeleteParameters {
  rightTypeId: number; // rightTypeId
}

/**
 * @name: RightMgtTypedelete
 * @date: 2022/1/20
 * @description: 删除权益类型
 * @param: {rightTypeId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function RightMgtTypedelete(parameters: Config & RightMgtTypedeleteParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/rightType/delete'

  return request('post', host + path, body, $config)
}

export interface RightMgtTypequeryPageParameters {
  id?: number; // 权益类型ID
  rightName?: string; // 权益名称
  rightType?: number; // 权益类型 0-权益 2-实物奖品 4-积分奖品
}

/**
 * @name: RightMgtTypequeryPage
 * @date: 2022/1/20
 * @description: 获取权益类型列表
 * @param: {id} [integer]
 * @param: {rightName} [string]
 * @param: {rightType} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<Array<权益类型请求>>>>
 */
export function RightMgtTypequeryPage(parameters: Config & RightMgtTypequeryPageParameters): Promise<AxiosResponse<公共响应对象<Array<权益类型请求>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/rightType/list'

  return request('get', host + path, body, $config)
}

export interface GoodsSpecialConfigurationaddParameters {
  request: 特殊配置请求; // request
}

/**
 * @name: GoodsSpecialConfigurationadd
 * @date: 2022/1/20
 * @description: 新增特殊配置
 * @param: {request} [特殊配置请求]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function GoodsSpecialConfigurationadd(parameters: Config & GoodsSpecialConfigurationaddParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/specialConfiguration/add'

  return request('post', host + path, body, $config)
}

export interface GoodsSpecialConfigurationdrawParameters {
  goodsSpecialDrawRequest: GoodsSpecialDrawRequest; // goodsSpecialDrawRequest
}

/**
 * @name: GoodsSpecialConfigurationdraw
 * @date: 2022/1/20
 * @description: UBI活动获取特殊物资
 * @param: {goodsSpecialDrawRequest} [GoodsSpecialDrawRequest]
 * @return: Promise<AxiosResponse<公共响应对象<RightProductOutDetailView>>>
 */
export function GoodsSpecialConfigurationdraw(parameters: Config & GoodsSpecialConfigurationdrawParameters): Promise<AxiosResponse<公共响应对象<RightProductOutDetailView>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/specialConfiguration/draw'

  return request('get', host + path, body, $config)
}

export interface GoodsSpecialConfigurationinfoParameters {
  goodsId?: number; // 物资信息id
}

/**
 * @name: GoodsSpecialConfigurationinfo
 * @date: 2022/1/20
 * @description: 查询特殊配置
 * @param: {goodsId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<特殊配置请求>>>
 */
export function GoodsSpecialConfigurationinfo(parameters: Config & GoodsSpecialConfigurationinfoParameters): Promise<AxiosResponse<公共响应对象<特殊配置请求>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/specialConfiguration/info/{goodsId}'

  return request('get', host + path, body, $config)
}

/**
 * @name: GoodsSpecialConfigurationlist
 * @date: 2022/1/20
 * @description: UBI活动查询特殊配置的权益列表
 * @return: Promise<AxiosResponse<公共响应对象<Array<GoodsSpecialView>>>>
 */
export function GoodsSpecialConfigurationlist(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<GoodsSpecialView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/goods/specialConfiguration/list'

  return request('get', host + path, body, $config)
}

export interface IntegralPrizesactivityExportParameters {
  activityName?: string; // 活动名称
  activityProject?: number; // 所属项目
  all?: string;
  category?: number; // 权益类型
  endTime?: string; // 结束时间
  from?: number;
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  startTime?: string; // 起始时间
  type: number; // 类型 1-积分发奖 2-活动发奖
}

/**
 * @name: IntegralPrizesactivityExport
 * @date: 2022/1/20
 * @description: 活动发奖导出
 * @param: {activityName} [string]
 * @param: {activityProject} [integer]
 * @param: {all} [string]
 * @param: {category} [integer]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {startTime} [string]
 * @param: {type} [integer]
 * @return: Promise<AxiosResponse<never>>
 */
export function IntegralPrizesactivityExport(parameters: Config & IntegralPrizesactivityExportParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/activityExport'

  return request('get', host + path, body, $config)
}

export interface IntegralPrizesaddParameters {
  request: 新增积分发奖; // request
}

/**
 * @name: IntegralPrizesadd
 * @date: 2022/1/20
 * @description: 新增积分发奖
 * @param: {request} [新增积分发奖]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function IntegralPrizesadd(parameters: Config & IntegralPrizesaddParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/add'

  return request('post', host + path, body, $config)
}

export interface IntegralPrizesdeleteParameters {
  integralPrizesId: number; // integralPrizesId
}

/**
 * @name: IntegralPrizesdelete
 * @date: 2022/1/20
 * @description: 删除积分发奖
 * @param: {integralPrizesId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function IntegralPrizesdelete(parameters: Config & IntegralPrizesdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/delete'

  return request('post', host + path, body, $config)
}

export interface IntegralPrizeseditParameters {
  request: 编辑积分发奖; // request
}

/**
 * @name: IntegralPrizesedit
 * @date: 2022/1/20
 * @description: 编辑积分发奖
 * @param: {request} [编辑积分发奖]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function IntegralPrizesedit(parameters: Config & IntegralPrizeseditParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/edit'

  return request('post', host + path, body, $config)
}

export interface IntegralPrizesexportIntegralParameters {
  activityName?: string; // 活动名称
  activityProject?: number; // 所属项目
  all?: string;
  category?: number; // 权益类型
  endTime?: string; // 结束时间
  from?: number;
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  startTime?: string; // 起始时间
  type: number; // 类型 1-积分发奖 2-活动发奖
}

/**
 * @name: IntegralPrizesexportIntegral
 * @date: 2022/1/20
 * @description: 积分发奖导出
 * @param: {activityName} [string]
 * @param: {activityProject} [integer]
 * @param: {all} [string]
 * @param: {category} [integer]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {startTime} [string]
 * @param: {type} [integer]
 * @return: Promise<AxiosResponse<never>>
 */
export function IntegralPrizesexportIntegral(parameters: Config & IntegralPrizesexportIntegralParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/export'

  return request('get', host + path, body, $config)
}

export interface IntegralPrizesinfoParameters {
  id: number; // id
}

/**
 * @name: IntegralPrizesinfo
 * @date: 2022/1/20
 * @description: 积分发奖查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<积分发奖明细>>>
 */
export function IntegralPrizesinfo(parameters: Config & IntegralPrizesinfoParameters): Promise<AxiosResponse<公共响应对象<积分发奖明细>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/info/{id}'

  return request('get', host + path, body, $config)
}

export interface IntegralPrizeslistIntegralPrizesParameters {
  activityName?: string; // 活动名称
  activityProject?: number; // 所属项目
  all?: string;
  category?: number; // 权益类型
  endTime?: string; // 结束时间
  from?: number;
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  startTime?: string; // 起始时间
  type: number; // 类型 1-积分发奖 2-活动发奖
}

/**
 * @name: IntegralPrizeslistIntegralPrizes
 * @date: 2022/1/20
 * @description: 积分发奖列表
 * @param: {activityName} [string]
 * @param: {activityProject} [integer]
 * @param: {all} [string]
 * @param: {category} [integer]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {startTime} [string]
 * @param: {type} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<积分发奖列表>>>>
 */
export function IntegralPrizeslistIntegralPrizes(parameters: Config & IntegralPrizeslistIntegralPrizesParameters): Promise<AxiosResponse<公共响应对象<PageUtils<积分发奖列表>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralPrizes/list-integral-prizes'

  return request('get', host + path, body, $config)
}

export interface IntegralUserInfoactivityExportIntegralUserInfoParameters {
  all?: string;
  from?: number;
  integralId: number; // 积分发奖id
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  phone?: string; // 用户手机号码
  userId?: string; // 用户ID
}

/**
 * @name: IntegralUserInfoactivityExportIntegralUserInfo
 * @date: 2022/1/20
 * @description: 活动用户导出
 * @param: {all} [string]
 * @param: {from} [integer]
 * @param: {integralId} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {phone} [string]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<never>>
 */
export function IntegralUserInfoactivityExportIntegralUserInfo(parameters: Config & IntegralUserInfoactivityExportIntegralUserInfoParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/activityExport'

  return request('get', host + path, body, $config)
}

/**
 * @name: IntegralUserInfoactivityTemplate
 * @date: 2022/1/20
 * @description: 用于活动发奖信息导入明细页面的模板下载
 * @return: Promise<AxiosResponse<never>>
 */
export function IntegralUserInfoactivityTemplate(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/activityTemplate'

  return request('get', host + path, body, $config)
}

export interface IntegralUserInfodeleteParameters {
  request: 积分用户信息删除请求; // request
}

/**
 * @name: IntegralUserInfodelete
 * @date: 2022/1/20
 * @description: 删除积分用户信息
 * @param: {request} [积分用户信息删除请求]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function IntegralUserInfodelete(parameters: Config & IntegralUserInfodeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/delete'

  return request('post', host + path, body, $config)
}

export interface IntegralUserInfoexportIntegralUserInfoParameters {
  all?: string;
  from?: number;
  integralId: number; // 积分发奖id
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  phone?: string; // 用户手机号码
  userId?: string; // 用户ID
}

/**
 * @name: IntegralUserInfoexportIntegralUserInfo
 * @date: 2022/1/20
 * @description: 积分用户导出
 * @param: {all} [string]
 * @param: {from} [integer]
 * @param: {integralId} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {phone} [string]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<never>>
 */
export function IntegralUserInfoexportIntegralUserInfo(parameters: Config & IntegralUserInfoexportIntegralUserInfoParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/export'

  return request('get', host + path, body, $config)
}

export interface IntegralUserInfograntIntegralParameters {
  query: 发放请求; // query
}

/**
 * @name: IntegralUserInfograntIntegral
 * @date: 2022/1/20
 * @description: 积分用户发放
 * @param: {query} [发放请求]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function IntegralUserInfograntIntegral(parameters: Config & IntegralUserInfograntIntegralParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/grantIntegral'

  return request('post', host + path, body, $config)
}

export interface IntegralUserInfoimportIntegralParameters {
  request: 积分发奖导入请求; // request
}

/**
 * @name: IntegralUserInfoimportIntegral
 * @date: 2022/1/20
 * @description: 用于积分发奖信息导入页面的导入确认
 * @param: {request} [积分发奖导入请求]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function IntegralUserInfoimportIntegral(parameters: Config & IntegralUserInfoimportIntegralParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/import'

  return request('post', host + path, body, $config)
}

export interface IntegralUserInfolistParameters {
  all?: string;
  from?: number;
  integralId: number; // 积分发奖id
  pageNumber: number; // 页码,从1开始
  pageSize: number; // 默认展示条数,缺省10条
  phone?: string; // 用户手机号码
  userId?: string; // 用户ID
}

/**
 * @name: IntegralUserInfolist
 * @date: 2022/1/20
 * @description: 积分用户列表
 * @param: {all} [string]
 * @param: {from} [integer]
 * @param: {integralId} [integer]
 * @param: {pageNumber} [integer]
 * @param: {pageSize} [integer]
 * @param: {phone} [string]
 * @param: {userId} [string]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<积分用户信息列表>>>>
 */
export function IntegralUserInfolist(parameters: Config & IntegralUserInfolistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<积分用户信息列表>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/list'

  return request('get', host + path, body, $config)
}

export interface IntegralUserInfopreimportParameters {
  file: File; // file
  integralId: number; // 积分发奖Id
  type: number; // 类型 1-积分发奖 2-活动发奖
}

/**
 * @name: IntegralUserInfopreimport
 * @date: 2022/1/20
 * @description: 用于积分发奖信息导入页面的预导入
 * @param: {file} [file]
 * @param: {integralId} [integer]
 * @param: {type} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PreImportResult>>>
 */
export function IntegralUserInfopreimport(parameters: Config & IntegralUserInfopreimportParameters): Promise<AxiosResponse<公共响应对象<PreImportResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/preimport'

  return request('post', host + path, body, $config)
}

/**
 * @name: IntegralUserInfotemplate
 * @date: 2022/1/20
 * @description: 用于积分发奖信息导入明细页面的模板下载
 * @return: Promise<AxiosResponse<never>>
 */
export function IntegralUserInfotemplate(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/integral/integralUserInfo/template'

  return request('get', host + path, body, $config)
}

export interface LableManagementaddLableManagementParameters {
  lableManagementVO: 标签管理; // lableManagementVO
}

/**
 * @name: LableManagementaddLableManagement
 * @date: 2022/1/20
 * @description: 新增标签管理
 * @param: {lableManagementVO} [标签管理]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function LableManagementaddLableManagement(parameters: Config & LableManagementaddLableManagementParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/addLableManagement'

  return request('post', host + path, body, $config)
}

export interface LableManagementcheckLableManagementParameters {
  id: number; // id
}

/**
 * @name: LableManagementcheckLableManagement
 * @date: 2022/1/20
 * @description: 删除标签管理校验
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function LableManagementcheckLableManagement(parameters: Config & LableManagementcheckLableManagementParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/checkLableManagement'

  return request('post', host + path, body, $config)
}

export interface LableManagementcheckLableManagementNameParameters {
  lableManagementVO: 标签管理; // lableManagementVO
}

/**
 * @name: LableManagementcheckLableManagementName
 * @date: 2022/1/20
 * @description: 标签管理名称唯一校验
 * @param: {lableManagementVO} [标签管理]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function LableManagementcheckLableManagementName(parameters: Config & LableManagementcheckLableManagementNameParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/checkLableManagementName'

  return request('post', host + path, body, $config)
}

export interface LableManagementdeleteParameters {
  id: number; // id
}

/**
 * @name: LableManagementdelete
 * @date: 2022/1/20
 * @description: 删除标签管理
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function LableManagementdelete(parameters: Config & LableManagementdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/delete'

  return request('post', host + path, body, $config)
}

export interface LableManagementinfoParameters {
  id: number; // id
}

/**
 * @name: LableManagementinfo
 * @date: 2022/1/20
 * @description: 标签管理详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<标签管理>>>
 */
export function LableManagementinfo(parameters: Config & LableManagementinfoParameters): Promise<AxiosResponse<公共响应对象<标签管理>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/info/{id}'

  return request('get', host + path, body, $config)
}

export interface LableManagementlistParameters {
  id?: number; // 标签id
  labelDescribe?: string; // 标签描述
  labelName?: string; // 标签名称
}

/**
 * @name: LableManagementlist
 * @date: 2022/1/20
 * @description: 标签管理列表
 * @param: {id} [integer]
 * @param: {labelDescribe} [string]
 * @param: {labelName} [string]
 * @return: Promise<AxiosResponse<公共响应对象<Array<标签管理>>>>
 */
export function LableManagementlist(parameters: Config & LableManagementlistParameters): Promise<AxiosResponse<公共响应对象<Array<标签管理>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/list'

  return request('get', host + path, body, $config)
}

export interface LableManagementupdateLableManagementParameters {
  lableManagementVO: 标签管理; // lableManagementVO
}

/**
 * @name: LableManagementupdateLableManagement
 * @date: 2022/1/20
 * @description: 编辑标签管理
 * @param: {lableManagementVO} [标签管理]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function LableManagementupdateLableManagement(parameters: Config & LableManagementupdateLableManagementParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/lableManagement/updateLableManagement'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawaddLuckyDrawParameters {
  request: AddActivityLuckyDrawRequest; // request
}

/**
 * @name: LuckyDrawaddLuckyDraw
 * @date: 2022/1/20
 * @description: 新增抽奖管理
 * @param: {request} [AddActivityLuckyDrawRequest]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function LuckyDrawaddLuckyDraw(parameters: Config & LuckyDrawaddLuckyDrawParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/addLuckyDraw'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawcheckLuckyDrawParameters {
  request: QueryActivityLotteryTemplateRequest; // request
}

/**
 * @name: LuckyDrawcheckLuckyDraw
 * @date: 2022/1/20
 * @description: 校验抽奖
 * @param: {request} [QueryActivityLotteryTemplateRequest]
 * @return: Promise<AxiosResponse<公共响应对象<校验抽奖模板VO>>>
 */
export function LuckyDrawcheckLuckyDraw(parameters: Config & LuckyDrawcheckLuckyDrawParameters): Promise<AxiosResponse<公共响应对象<校验抽奖模板VO>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/checkLuckyDraw'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawdeleteParameters {
  id: number; // id
}

/**
 * @name: LuckyDrawdelete
 * @date: 2022/1/20
 * @description: 删除抽奖管理
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function LuckyDrawdelete(parameters: Config & LuckyDrawdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/delete'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawinfoParameters {
  id: number; // id
}

/**
 * @name: LuckyDrawinfo
 * @date: 2022/1/20
 * @description: 抽奖管理详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<AddActivityLuckyDrawRequest>>>
 */
export function LuckyDrawinfo(parameters: Config & LuckyDrawinfoParameters): Promise<AxiosResponse<公共响应对象<AddActivityLuckyDrawRequest>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/info/{id}'

  return request('get', host + path, body, $config)
}

export interface LuckyDrawlistParameters {
  activityCode?: string; // 所属活动
  activityName?: string; // 所属名称
  applicableUser?: string; // 适用用户:1-全选,2-CNS,3-CRS,4-非CNS非CRS
  createdBy?: string; // 创建人
  endCreatedTime?: string; // 创建时间结束（列表查询使用）
  endTime?: string; // 抽奖有效期结束时间
  from?: number;
  id?: number; // 抽奖管理id
  integralSetting?: number; // 积分设置
  lotteryTemplate?: number; // 抽奖模板
  lotteryTitle?: string; // 抽奖标题
  page?: string; // 分页
  participationAuthority?: number; // 参与条件设置:1-首次下单可抽奖,2-每次下单均可抽奖
  participationConditionSetting?: number; // 参与方式
  size?: string; // 每页数量
  startCreatedTime?: string; // 创建时间开始（列表查询使用）
  startTime?: string; // 抽奖有效期开始时间
  status?: number; // 状态 1-未开始，2-进行中，3-已结束
}

/**
 * @name: LuckyDrawlist
 * @date: 2022/1/20
 * @description: 抽奖管理列表
 * @param: {activityCode} [string]
 * @param: {activityName} [string]
 * @param: {applicableUser} [string]
 * @param: {createdBy} [string]
 * @param: {endCreatedTime} [string]
 * @param: {endTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {integralSetting} [integer]
 * @param: {lotteryTemplate} [integer]
 * @param: {lotteryTitle} [string]
 * @param: {page} [string]
 * @param: {participationAuthority} [integer]
 * @param: {participationConditionSetting} [integer]
 * @param: {size} [string]
 * @param: {startCreatedTime} [string]
 * @param: {startTime} [string]
 * @param: {status} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<抽奖管理>>>>
 */
export function LuckyDrawlist(parameters: Config & LuckyDrawlistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<抽奖管理>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/list'

  return request('get', host + path, body, $config)
}

export interface LuckyDrawupdateLuckyDrawParameters {
  luckyDrawVO: AddActivityLuckyDrawRequest; // luckyDrawVO
}

/**
 * @name: LuckyDrawupdateLuckyDraw
 * @date: 2022/1/20
 * @description: 编辑抽奖管理
 * @param: {luckyDrawVO} [AddActivityLuckyDrawRequest]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function LuckyDrawupdateLuckyDraw(parameters: Config & LuckyDrawupdateLuckyDrawParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/updateLuckyDraw'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawupdateStatusParameters {
  awardStatus: number; // 上下架状态
  id: number; // 奖项id
}

/**
 * @name: LuckyDrawupdateStatus
 * @date: 2022/1/20
 * @description: 奖项状态修改
 * @param: {awardStatus} [integer]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function LuckyDrawupdateStatus(parameters: Config & LuckyDrawupdateStatusParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/luckyDraw/updateStatus'

  return request('post', host + path, body, $config)
}

export interface QuestionBankaddQuestionBankParameters {
  questionBankVO: QuestionBankVO; // questionBankVO
}

/**
 * @name: QuestionBankaddQuestionBank
 * @date: 2022/1/20
 * @description: 新增题库
 * @param: {questionBankVO} [QuestionBankVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function QuestionBankaddQuestionBank(parameters: Config & QuestionBankaddQuestionBankParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/questionBank/addQuestionBank'

  return request('post', host + path, body, $config)
}

export interface QuestionBankcheckQuestionBankParameters {
  id: number; // id
}

/**
 * @name: QuestionBankcheckQuestionBank
 * @date: 2022/1/20
 * @description: 删除题库校验
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<删除逻辑提示>>>
 */
export function QuestionBankcheckQuestionBank(parameters: Config & QuestionBankcheckQuestionBankParameters): Promise<AxiosResponse<公共响应对象<删除逻辑提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/questionBank/checkQuestionBank/{id}'

  return request('post', host + path, body, $config)
}

export interface QuestionBankdeleteParameters {
  id: number; // id
}

/**
 * @name: QuestionBankdelete
 * @date: 2022/1/20
 * @description: 删除题库
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function QuestionBankdelete(parameters: Config & QuestionBankdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/questionBank/delete/{id}'

  return request('post', host + path, body, $config)
}

export interface QuestionBankinfoParameters {
  id: number; // id
}

/**
 * @name: QuestionBankinfo
 * @date: 2022/1/20
 * @description: 题库详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<题库数据>>>
 */
export function QuestionBankinfo(parameters: Config & QuestionBankinfoParameters): Promise<AxiosResponse<公共响应对象<题库数据>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/questionBank/info/{id}'

  return request('get', host + path, body, $config)
}

export interface QuestionBanklistParameters {
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  id?: number; // 题库id
  page?: number; // 分页
  questionBankName?: string; // 题库名称
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
}

/**
 * @name: QuestionBanklist
 * @date: 2022/1/20
 * @description: 题库列表
 * @param: {endCreatedTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {page} [integer]
 * @param: {questionBankName} [string]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<题库数据>>>>
 */
export function QuestionBanklist(parameters: Config & QuestionBanklistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<题库数据>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/questionBank/list'

  return request('get', host + path, body, $config)
}

export interface QuestionBankupdateQuestionBankParameters {
  questionBankVO: QuestionBankVO; // questionBankVO
}

/**
 * @name: QuestionBankupdateQuestionBank
 * @date: 2022/1/20
 * @description: 编辑题库
 * @param: {questionBankVO} [QuestionBankVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function QuestionBankupdateQuestionBank(parameters: Config & QuestionBankupdateQuestionBankParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/questionBank/updateQuestionBank'

  return request('post', host + path, body, $config)
}

export interface SubjectaddSubjectParameters {
  subjectVO: SubjectVO; // subjectVO
}

/**
 * @name: SubjectaddSubject
 * @date: 2022/1/20
 * @description: 新增题目
 * @param: {subjectVO} [SubjectVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function SubjectaddSubject(parameters: Config & SubjectaddSubjectParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/addSubject'

  return request('post', host + path, body, $config)
}

export interface SubjectcheckSubjectParameters {
  ids: Array<number>; // ids
}

/**
 * @name: SubjectcheckSubject
 * @date: 2022/1/20
 * @description: 删除题目校验
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<删除逻辑提示>>>
 */
export function SubjectcheckSubject(parameters: Config & SubjectcheckSubjectParameters): Promise<AxiosResponse<公共响应对象<删除逻辑提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/checkSubject'

  return request('post', host + path, body, $config)
}

export interface SubjectcheckUpdageSubjectParameters {
  id: Array<number>; // id
}

/**
 * @name: SubjectcheckUpdageSubject
 * @date: 2022/1/20
 * @description: 编辑题目校验
 * @param: {id} [array]
 * @return: Promise<AxiosResponse<公共响应对象<校验提示>>>
 */
export function SubjectcheckUpdageSubject(parameters: Config & SubjectcheckUpdageSubjectParameters): Promise<AxiosResponse<公共响应对象<校验提示>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/checkUpdageSubject'

  return request('post', host + path, body, $config)
}

export interface SubjectdeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: Subjectdelete
 * @date: 2022/1/20
 * @description: 删除题目
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function Subjectdelete(parameters: Config & SubjectdeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/delete'

  return request('post', host + path, body, $config)
}

export interface SubjectexportSubjectParameters {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  id?: number; // 题目ID
  optionType?: number; // 0为全选，选项类型(1-单选，2-多选)
  options?: string; // 题目选项
  page?: number; // 分页
  problemDescription?: string; // 问题描述
  problemDescriptionEnclosureUrl?: string; // 问题描述附件
  problemType?: number; // 0为全选，问题类型（1-纯文本，2-视频，3-图片）
  questionBankId?: string; // 所属题库id
  rightSolution?: string; // 正确答案
  score?: number; // 得分
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  vehicleSeries?: string; // 1为全选，车系（查询适用）
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
}

/**
 * @name: SubjectexportSubject
 * @date: 2022/1/20
 * @description: 题目导出
 * @param: {applicableUser} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {optionType} [integer]
 * @param: {options} [string]
 * @param: {page} [integer]
 * @param: {problemDescription} [string]
 * @param: {problemDescriptionEnclosureUrl} [string]
 * @param: {problemType} [integer]
 * @param: {questionBankId} [string]
 * @param: {rightSolution} [string]
 * @param: {score} [integer]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {vehicleSeries} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @return: Promise<AxiosResponse<never>>
 */
export function SubjectexportSubject(parameters: Config & SubjectexportSubjectParameters): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/export'

  return request('get', host + path, body, $config)
}

export interface SubjectinfoParameters {
  id: number; // id
}

/**
 * @name: Subjectinfo
 * @date: 2022/1/20
 * @description: 题目详情查看
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<题目数据>>>
 */
export function Subjectinfo(parameters: Config & SubjectinfoParameters): Promise<AxiosResponse<公共响应对象<题目数据>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/info/{id}'

  return request('get', host + path, body, $config)
}

export interface SubjectlistParameters {
  applicableUser?: number; // 适用用户（查询适用）:1-全选,2-CNS,3-CRS,4-非CNS非CRS,5-车联网用户
  endCreatedTime?: string; // 创建时间结束
  from?: number;
  id?: number; // 题目ID
  optionType?: number; // 0为全选，选项类型(1-单选，2-多选)
  options?: string; // 题目选项
  page?: number; // 分页
  problemDescription?: string; // 问题描述
  problemDescriptionEnclosureUrl?: string; // 问题描述附件
  problemType?: number; // 0为全选，问题类型（1-纯文本，2-视频，3-图片）
  questionBankId?: string; // 所属题库id
  rightSolution?: string; // 正确答案
  score?: number; // 得分
  size?: number; // 每页数量
  startCreatedTime?: string; // 创建时间开始
  vehicleSeries?: string; // 1为全选，车系（查询适用）
  applicableUserDetailedVO?: Array<ApplicableUserDetailedVO>; // ApplicableUserDetailedVO
}

/**
 * @name: Subjectlist
 * @date: 2022/1/20
 * @description: 题目列表
 * @param: {applicableUser} [integer]
 * @param: {endCreatedTime} [string]
 * @param: {from} [integer]
 * @param: {id} [integer]
 * @param: {optionType} [integer]
 * @param: {options} [string]
 * @param: {page} [integer]
 * @param: {problemDescription} [string]
 * @param: {problemDescriptionEnclosureUrl} [string]
 * @param: {problemType} [integer]
 * @param: {questionBankId} [string]
 * @param: {rightSolution} [string]
 * @param: {score} [integer]
 * @param: {size} [integer]
 * @param: {startCreatedTime} [string]
 * @param: {vehicleSeries} [string]
 * @param: {applicableUserDetailedVO} [array]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<题目数据>>>>
 */
export function Subjectlist(parameters: Config & SubjectlistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<题目数据>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/list'

  return request('get', host + path, body, $config)
}

/**
 * @name: SubjectqueryQuestionBankAll
 * @date: 2022/1/20
 * @description: 查询所有题库
 * @return: Promise<AxiosResponse<公共响应对象<Array<题库数据>>>>
 */
export function SubjectqueryQuestionBankAll(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<题库数据>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/queryQuestionBankAll'

  return request('get', host + path, body, $config)
}

export interface SubjectsubjectImportParameters {
  file: File; // file
  questionBankId: number; // questionBankId
}

/**
 * @name: SubjectsubjectImport
 * @date: 2022/1/20
 * @description: 题目导入
 * @param: {file} [file]
 * @param: {questionBankId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<ImportResult>>>
 */
export function SubjectsubjectImport(parameters: Config & SubjectsubjectImportParameters): Promise<AxiosResponse<公共响应对象<ImportResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/subjectImport'

  return request('post', host + path, body, $config)
}

/**
 * @name: SubjectdownloadTemplate
 * @date: 2022/1/20
 * @description: 题目模板下载
 * @return: Promise<AxiosResponse<never>>
 */
export function SubjectdownloadTemplate(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/template'

  return request('get', host + path, body, $config)
}

export interface SubjectupdateSubjectParameters {
  subjectVO: SubjectVO; // subjectVO
}

/**
 * @name: SubjectupdateSubject
 * @date: 2022/1/20
 * @description: 编辑题目
 * @param: {subjectVO} [SubjectVO]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function SubjectupdateSubject(parameters: Config & SubjectupdateSubjectParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/subject/updateSubject'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotteryaddActivityAwardPoolParameters {
  request: AddActivityAwardPoolRequest; // request
}

/**
 * @name: ActivityAwardLotteryaddActivityAwardPool
 * @date: 2022/1/20
 * @description: 新增活动、奖项、页面配置的信息
 * @param: {request} [AddActivityAwardPoolRequest]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ActivityAwardLotteryaddActivityAwardPool(parameters: Config & ActivityAwardLotteryaddActivityAwardPoolParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/addActivityAwardPool'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotterycheckLotteryTemplateParameters {
  request: QueryActivityLotteryTemplateRequest; // request
}

/**
 * @name: ActivityAwardLotterycheckLotteryTemplate
 * @date: 2022/1/20
 * @description: 校验抽奖模板
 * @param: {request} [QueryActivityLotteryTemplateRequest]
 * @return: Promise<AxiosResponse<公共响应对象<校验抽奖模板VO>>>
 */
export function ActivityAwardLotterycheckLotteryTemplate(parameters: Config & ActivityAwardLotterycheckLotteryTemplateParameters): Promise<AxiosResponse<公共响应对象<校验抽奖模板VO>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/checkLotteryTemplate'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotteryeditActivityAwardPoolParameters {
  request: AddActivityAwardPoolRequest; // request
}

/**
 * @name: ActivityAwardLotteryeditActivityAwardPool
 * @date: 2022/1/20
 * @description: 编辑活动、奖项、页面配置的信息
 * @param: {request} [AddActivityAwardPoolRequest]
 * @return: Promise<AxiosResponse<公共响应对象<AddActivityAwardPoolRequest>>>
 */
export function ActivityAwardLotteryeditActivityAwardPool(parameters: Config & ActivityAwardLotteryeditActivityAwardPoolParameters): Promise<AxiosResponse<公共响应对象<AddActivityAwardPoolRequest>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/editActivityAwardPool'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotteryeditActivityAwardPoolDynamicParameters {
  request: AddActivityAwardPoolRequest; // request
}

/**
 * @name: ActivityAwardLotteryeditActivityAwardPoolDynamic
 * @date: 2022/1/20
 * @description: 编辑活动、奖项、页面配置的信息奖池、奖项均可动态变更
 * @param: {request} [AddActivityAwardPoolRequest]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function ActivityAwardLotteryeditActivityAwardPoolDynamic(parameters: Config & ActivityAwardLotteryeditActivityAwardPoolDynamicParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/editActivityAwardPoolDynamic'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotteryqueryActivityAwardPoolParameters {
  request: QueryActivityAwardPoolRequest; // request
}

/**
 * @name: ActivityAwardLotteryqueryActivityAwardPool
 * @date: 2022/1/20
 * @description: 查询活动、奖项、页面配置的信息
 * @param: {request} [QueryActivityAwardPoolRequest]
 * @return: Promise<AxiosResponse<公共响应对象<AddActivityAwardPoolRequest>>>
 */
export function ActivityAwardLotteryqueryActivityAwardPool(parameters: Config & ActivityAwardLotteryqueryActivityAwardPoolParameters): Promise<AxiosResponse<公共响应对象<AddActivityAwardPoolRequest>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/queryActivityAwardPool'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotteryqueryActivityAwardProductListParameters {
  request: QueryActivityAwardProductRequest; // request
}

/**
 * @name: ActivityAwardLotteryqueryActivityAwardProductList
 * @date: 2022/1/20
 * @description: 查询权益对应的商品信息
 * @param: {request} [QueryActivityAwardProductRequest]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<RightSkuInfoView>>>>
 */
export function ActivityAwardLotteryqueryActivityAwardProductList(parameters: Config & ActivityAwardLotteryqueryActivityAwardProductListParameters): Promise<AxiosResponse<公共响应对象<PageUtils<RightSkuInfoView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/queryActivityAwardProductList'

  return request('post', host + path, body, $config)
}

export interface ActivityAwardLotteryqueryAwardTotalConditionByIdParameters {
  request: QueryAwardTotalConditionByIdRequest; // request
}

/**
 * @name: ActivityAwardLotteryqueryAwardTotalConditionById
 * @date: 2022/1/20
 * @description: 查询奖项的整体情况信息
 * @param: {request} [QueryAwardTotalConditionByIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<AwardDescVO>>>
 */
export function ActivityAwardLotteryqueryAwardTotalConditionById(parameters: Config & ActivityAwardLotteryqueryAwardTotalConditionByIdParameters): Promise<AxiosResponse<公共响应对象<AwardDescVO>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/tsp/activity/award/handel/queryAwardTotalConditionById'

  return request('post', host + path, body, $config)
}

export interface UserSeriesModelgetGoodsRightsContentlListParameters {
  req: 查询审批通过的物资权益; // req
}

/**
 * @name: UserSeriesModelgetGoodsRightsContentlList
 * @date: 2022/1/20
 * @description: 获取物资管理权益信息
 * @param: {req} [查询审批通过的物资权益]
 * @return: Promise<AxiosResponse<公共响应对象<Array<RightProductInfoActiveView>>>>
 */
export function UserSeriesModelgetGoodsRightsContentlList(parameters: Config & UserSeriesModelgetGoodsRightsContentlListParameters): Promise<AxiosResponse<公共响应对象<Array<RightProductInfoActiveView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/userSeriesModel/getGoodsRightsContentlList'

  return request('post', host + path, body, $config)
}

/**
 * @name: UserSeriesModelgetModelList
 * @date: 2022/1/20
 * @description: 查询获取全部车型
 * @return: Promise<AxiosResponse<公共响应对象<Array<车型>>>>
 */
export function UserSeriesModelgetModelList(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<车型>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/userSeriesModel/getModelList'

  return request('post', host + path, body, $config)
}

export interface UserSeriesModelgetRightsContentlListParameters {
  rightsDetailedVO: RightsDetailedVO; // rightsDetailedVO
}

/**
 * @name: UserSeriesModelgetRightsContentlList
 * @date: 2022/1/20
 * @description: 获取权益信息
 * @param: {rightsDetailedVO} [RightsDetailedVO]
 * @return: Promise<AxiosResponse<公共响应对象<Array<RightProductInfoActiveView>>>>
 */
export function UserSeriesModelgetRightsContentlList(parameters: Config & UserSeriesModelgetRightsContentlListParameters): Promise<AxiosResponse<公共响应对象<Array<RightProductInfoActiveView>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/userSeriesModel/getRightsContentlList'

  return request('post', host + path, body, $config)
}

/**
 * @name: UserSeriesModelgetSeriesList
 * @date: 2022/1/20
 * @description: 查询获取全部车系
 * @return: Promise<AxiosResponse<公共响应对象<Array<车系>>>>
 */
export function UserSeriesModelgetSeriesList(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<车系>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/userSeriesModel/getSeriesList'

  return request('post', host + path, body, $config)
}

/**
 * @name: UserSeriesModelgetUserSeriesModelList
 * @date: 2022/1/20
 * @description: 新增获取全部适用户
 * @return: Promise<AxiosResponse<公共响应对象<Array<适用用户>>>>
 */
export function UserSeriesModelgetUserSeriesModelList(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<适用用户>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/userSeriesModel/getUserSeriesModelList'

  return request('post', host + path, body, $config)
}

/**
 * @name: UserSeriesModelgetUserlList
 * @date: 2022/1/20
 * @description: 查询获取全部适用户
 * @return: Promise<AxiosResponse<公共响应对象<Array<适用用户>>>>
 */
export function UserSeriesModelgetUserlList(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<适用用户>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/api/v1/userSeriesModel/getUserlList'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfoaddActivityParameters {
  tspActivityInfoVO: 活动类; // tspActivityInfoVO
}

/**
 * @name: TspActivityInfoaddActivity
 * @date: 2022/1/20
 * @description: 新增活动
 * @param: {tspActivityInfoVO} [活动类]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function TspActivityInfoaddActivity(parameters: Config & TspActivityInfoaddActivityParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/addActivity'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfoauditParameters {
  activityId: number; // activityId
  auditCode: number; // auditCode
  auditOpinion?: string; // auditOpinion
}

/**
 * @name: TspActivityInfoaudit
 * @date: 2022/1/20
 * @description: 审核活动
 * @param: {activityId} [integer]
 * @param: {auditCode} [integer]
 * @param: {auditOpinion} [string]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function TspActivityInfoaudit(parameters: Config & TspActivityInfoauditParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/audit'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfodeleteParameters {
  ids: Array<number>; // ids
}

/**
 * @name: TspActivityInfodelete
 * @date: 2022/1/20
 * @description: 删除活动
 * @param: {ids} [array]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function TspActivityInfodelete(parameters: Config & TspActivityInfodeleteParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/delete'

  return request('post', host + path, body, $config)
}

/**
 * @name: TspActivityInfogetActivityInfoList
 * @date: 2022/1/20
 * @description: 查询获取全部有效活动
 * @return: Promise<AxiosResponse<公共响应对象<Array<查询活动>>>>
 */
export function TspActivityInfogetActivityInfoList(parameters: Config): Promise<AxiosResponse<公共响应对象<Array<查询活动>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/getActivityInfoList'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfogroundParameters {
  activityId: number; // activityId
  groundCode: number; // groundCode
}

/**
 * @name: TspActivityInfoground
 * @date: 2022/1/20
 * @description: 活动上下架
 * @param: {activityId} [integer]
 * @param: {groundCode} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function TspActivityInfoground(parameters: Config & TspActivityInfogroundParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/ground'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfoinfoParameters {
  id: number; // id
}

/**
 * @name: TspActivityInfoinfo
 * @date: 2022/1/20
 * @description: 活动查询
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function TspActivityInfoinfo(parameters: Config & TspActivityInfoinfoParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/info/{id}'

  return request('get', host + path, body, $config)
}

export interface TspActivityInfolistParameters {
  activityProject?: number; // 所属项目
  auditCode?: number;
  createTimeFrom?: string;
  createTimeTo?: string;
  createdBy?: string; // 创建人
  endTimeFrom?: string;
  endTimeTo?: string;
  groundCode?: number;
  name?: string;
  page?: string;
  publisher?: string;
  size?: string;
  startTimeFrom?: string;
  startTimeTo?: string;
  status?: number; // 状态
  typeCode?: number;
}

/**
 * @name: TspActivityInfolist
 * @date: 2022/1/20
 * @description: 活动列表
 * @param: {activityProject} [integer]
 * @param: {auditCode} [integer]
 * @param: {createTimeFrom} [string]
 * @param: {createTimeTo} [string]
 * @param: {createdBy} [string]
 * @param: {endTimeFrom} [string]
 * @param: {endTimeTo} [string]
 * @param: {groundCode} [integer]
 * @param: {name} [string]
 * @param: {page} [string]
 * @param: {publisher} [string]
 * @param: {size} [string]
 * @param: {startTimeFrom} [string]
 * @param: {startTimeTo} [string]
 * @param: {status} [integer]
 * @param: {typeCode} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<活动类>>>>
 */
export function TspActivityInfolist(parameters: Config & TspActivityInfolistParameters): Promise<AxiosResponse<公共响应对象<PageUtils<活动类>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/list'

  return request('get', host + path, body, $config)
}

export interface TspActivityInfoproductListParameters {
  page: number; // page
  size: number; // size
}

/**
 * @name: TspActivityInfoproductList
 * @date: 2022/1/20
 * @description: 查询商品列表
 * @param: {page} [integer]
 * @param: {size} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<PageUtils<ProductInfoWithPromotion>>>>
 */
export function TspActivityInfoproductList(parameters: Config & TspActivityInfoproductListParameters): Promise<AxiosResponse<公共响应对象<PageUtils<ProductInfoWithPromotion>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/productList'

  return request('get', host + path, body, $config)
}

export interface TspActivityInfoqueryListCountParameters {
  activityProject?: number; // 所属项目
  auditCode?: number;
  createTimeFrom?: string;
  createTimeTo?: string;
  createdBy?: string; // 创建人
  endTimeFrom?: string;
  endTimeTo?: string;
  groundCode?: number;
  name?: string;
  page?: string;
  publisher?: string;
  size?: string;
  startTimeFrom?: string;
  startTimeTo?: string;
  status?: number; // 状态
  typeCode?: number;
}

/**
 * @name: TspActivityInfoqueryListCount
 * @date: 2022/1/20
 * @description: 条件查询活动总数
 * @param: {activityProject} [integer]
 * @param: {auditCode} [integer]
 * @param: {createTimeFrom} [string]
 * @param: {createTimeTo} [string]
 * @param: {createdBy} [string]
 * @param: {endTimeFrom} [string]
 * @param: {endTimeTo} [string]
 * @param: {groundCode} [integer]
 * @param: {name} [string]
 * @param: {page} [string]
 * @param: {publisher} [string]
 * @param: {size} [string]
 * @param: {startTimeFrom} [string]
 * @param: {startTimeTo} [string]
 * @param: {status} [integer]
 * @param: {typeCode} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<CountListResult>>>
 */
export function TspActivityInfoqueryListCount(parameters: Config & TspActivityInfoqueryListCountParameters): Promise<AxiosResponse<公共响应对象<CountListResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/queryListCount'

  return request('get', host + path, body, $config)
}

export interface TspActivityInfoupdateParameters {
  tspActivityInfoVO: 活动类; // tspActivityInfoVO
}

/**
 * @name: TspActivityInfoupdate
 * @date: 2022/1/20
 * @description: 编辑活动
 * @param: {tspActivityInfoVO} [活动类]
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function TspActivityInfoupdate(parameters: Config & TspActivityInfoupdateParameters): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/update'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfowhiteListCountParameters {
  activityId: number; // activityId
}

/**
 * @name: TspActivityInfowhiteListCount
 * @date: 2022/1/20
 * @description: 查询白名单总数
 * @param: {activityId} [integer]
 * @return: Promise<AxiosResponse<公共响应对象<int>>>
 */
export function TspActivityInfowhiteListCount(parameters: Config & TspActivityInfowhiteListCountParameters): Promise<AxiosResponse<公共响应对象<int>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/admin/v1/api/info/whiteListCount'

  return request('get', host + path, body, $config)
}

/**
 * @name: AutoGroundretry
 * @date: 2022/1/20
 * @description: 活动自动上下架
 * @return: Promise<AxiosResponse<公共响应对象<any>>>
 */
export function AutoGroundretry(parameters: Config): Promise<AxiosResponse<公共响应对象<any>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/auto-ground/ground'

  return request('get', host + path, body, $config)
}

export interface AwardPublicgetAwardListByActivityIdToMSParameters {
  request: QueryAwardListByActivityIdRequest; // request
}

/**
 * @name: AwardPublicgetAwardListByActivityIdToMS
 * @date: 2022/1/20
 * @description: ms抽奖结果
 * @param: {request} [QueryAwardListByActivityIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<Array<AwardMSVO>>>>
 */
export function AwardPublicgetAwardListByActivityIdToMS(parameters: Config & AwardPublicgetAwardListByActivityIdToMSParameters): Promise<AxiosResponse<公共响应对象<Array<AwardMSVO>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/award/getAwardListByActivityIdToMS'

  return request('post', host + path, body, $config)
}

export interface AwardPoolGoodsRelationgetBarCodeByLotteryIdParameters {
  request?: GetBarCodeByLotteryIdRequest; // request
}

/**
 * @name: AwardPoolGoodsRelationgetBarCodeByLotteryId
 * @date: 2022/1/20
 * @description: 通过中奖结果id列表获取券码信息
 * @param: {request} [GetBarCodeByLotteryIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<Array<AwardPoolGoodsRelationVoM>>>>
 */
export function AwardPoolGoodsRelationgetBarCodeByLotteryId(parameters: Config & AwardPoolGoodsRelationgetBarCodeByLotteryIdParameters): Promise<AxiosResponse<公共响应对象<Array<AwardPoolGoodsRelationVoM>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/award/pool/relation/getBarCodeByLotteryId'

  return request('post', host + path, body, $config)
}

/**
 * @name: AwardPoolGoodsRelationsyncAwardPoolToProduct
 * @date: 2022/1/20
 * @description: 定时任务同步商品中心扣减商品中心库存信息
 * @return: Promise<AxiosResponse<never>>
 */
export function AwardPoolGoodsRelationsyncAwardPoolToProduct(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/award/pool/relation/sync'

  return request('get', host + path, body, $config)
}

/**
 * @name: AwardPoolSettingsyncAwardPoolToSetting
 * @date: 2022/1/20
 * @description: 定时任务处理相应的过时没有处理的奖品信息，把这些奖项剩余的当天之前的奖品信息放入不可用的状态
 * @return: Promise<AxiosResponse<never>>
 */
export function AwardPoolSettingsyncAwardPoolToSetting(parameters: Config): Promise<AxiosResponse<never>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/award/pool/setting/sync'

  return request('get', host + path, body, $config)
}

export interface LuckyDrawLotteryResultcommonLuckyDrawParameters {
  request: LuckyDrawNewRequest; // request
}

/**
 * @name: LuckyDrawLotteryResultcommonLuckyDraw
 * @date: 2022/1/20
 * @description: 根据活动id和用户id进行抽奖,需要传用户来源，不限制次数和中奖接口（例如订单抽奖）
 * @param: {request} [LuckyDrawNewRequest]
 * @return: Promise<AxiosResponse<公共响应对象<LuckyDrawResult>>>
 */
export function LuckyDrawLotteryResultcommonLuckyDraw(parameters: Config & LuckyDrawLotteryResultcommonLuckyDrawParameters): Promise<AxiosResponse<公共响应对象<LuckyDrawResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/lucky/draw/lottery/result/commonLuckyDraw'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawLotteryResultcustomLuckyDrawParameters {
  request: LuckyDrawNewRequest; // request
}

/**
 * @name: LuckyDrawLotteryResultcustomLuckyDraw
 * @date: 2022/1/20
 * @description: 根据活动id和用户id进行抽奖,需要传用户来源，有规则的接口（例如新用户教育）
 * @param: {request} [LuckyDrawNewRequest]
 * @return: Promise<AxiosResponse<公共响应对象<LuckyDrawResult>>>
 */
export function LuckyDrawLotteryResultcustomLuckyDraw(parameters: Config & LuckyDrawLotteryResultcustomLuckyDrawParameters): Promise<AxiosResponse<公共响应对象<LuckyDrawResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/lucky/draw/lottery/result/customLuckyDraw'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawLotteryResultyearLuckyDrawParameters {
  request: LuckyDrawNewRequest; // request
}

/**
 * @name: LuckyDrawLotteryResultyearLuckyDraw
 * @date: 2022/1/20
 * @description: 根据活动id和用户id进行抽奖,需要传用户来源，有规则的接口（例如年底运营活动）
 * @param: {request} [LuckyDrawNewRequest]
 * @return: Promise<AxiosResponse<公共响应对象<LuckyDrawResult>>>
 */
export function LuckyDrawLotteryResultyearLuckyDraw(parameters: Config & LuckyDrawLotteryResultyearLuckyDrawParameters): Promise<AxiosResponse<公共响应对象<LuckyDrawResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/internal/api/v1/lucky/draw/lottery/result/yearLuckyDraw'

  return request('post', host + path, body, $config)
}

export interface AwardPublicgetAwardListByActivityIdParameters {
  request: QueryAwardListByActivityIdRequest; // request
}

/**
 * @name: AwardPublicgetAwardListByActivityId
 * @date: 2022/1/20
 * @description: 抽奖结果
 * @param: {request} [QueryAwardListByActivityIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<Array<AwardVO>>>>
 */
export function AwardPublicgetAwardListByActivityId(parameters: Config & AwardPublicgetAwardListByActivityIdParameters): Promise<AxiosResponse<公共响应对象<Array<AwardVO>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/award/getAwardListByActivityId'

  return request('post', host + path, body, $config)
}

export interface AwardSettingaddAwardSettingParameters {
  request: ActivityAwardPoolSetting; // request
}

/**
 * @name: AwardSettingaddAwardSetting
 * @date: 2022/1/20
 * @description: 校验活动信息新增
 * @param: {request} [ActivityAwardPoolSetting]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function AwardSettingaddAwardSetting(parameters: Config & AwardSettingaddAwardSettingParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/awardSetting/addAwardSetting'

  return request('post', host + path, body, $config)
}

export interface AwardSettingeditAwardSettingByActivityParameters {
  request: EditAwardSettingByActivityRequest; // request
}

/**
 * @name: AwardSettingeditAwardSettingByActivity
 * @date: 2022/1/20
 * @description: 校验活动信息根据活动项进行整体编辑
 * @param: {request} [EditAwardSettingByActivityRequest]
 * @return: Promise<AxiosResponse<公共响应对象<ActivityAwardPoolSetting>>>
 */
export function AwardSettingeditAwardSettingByActivity(parameters: Config & AwardSettingeditAwardSettingByActivityParameters): Promise<AxiosResponse<公共响应对象<ActivityAwardPoolSetting>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/awardSetting/editAwardSettingByActivity'

  return request('post', host + path, body, $config)
}

export interface AwardSettingeditAwardSettingByAwardParameters {
  request: EditAwardSettingRequest; // request
}

/**
 * @name: AwardSettingeditAwardSettingByAward
 * @date: 2022/1/20
 * @description: 校验活动信息根据活动项奖品项进行编辑
 * @param: {request} [EditAwardSettingRequest]
 * @return: Promise<AxiosResponse<公共响应对象<AwardSetting>>>
 */
export function AwardSettingeditAwardSettingByAward(parameters: Config & AwardSettingeditAwardSettingByAwardParameters): Promise<AxiosResponse<公共响应对象<AwardSetting>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/awardSetting/editAwardSettingByAward'

  return request('post', host + path, body, $config)
}

export interface AwardSettingqueryAwardDescByAwardIdParameters {
  request: QueryAwardDescByAwardIdRequest; // request
}

/**
 * @name: AwardSettingqueryAwardDescByAwardId
 * @date: 2022/1/20
 * @description: 根据奖项id查询奖项信息
 * @param: {request} [QueryAwardDescByAwardIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<Award>>>
 */
export function AwardSettingqueryAwardDescByAwardId(parameters: Config & AwardSettingqueryAwardDescByAwardIdParameters): Promise<AxiosResponse<公共响应对象<Award>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/awardSetting/queryAwardDescByAwardId'

  return request('post', host + path, body, $config)
}

export interface AwardSettingqueryAwardSettingByActivityIdParameters {
  request: QueryAwardSettingRequest; // request
}

/**
 * @name: AwardSettingqueryAwardSettingByActivityId
 * @date: 2022/1/20
 * @description: 校验活动信息根据活动id进行查询
 * @param: {request} [QueryAwardSettingRequest]
 * @return: Promise<AxiosResponse<公共响应对象<ActivityAwardPoolSetting>>>
 */
export function AwardSettingqueryAwardSettingByActivityId(parameters: Config & AwardSettingqueryAwardSettingByActivityIdParameters): Promise<AxiosResponse<公共响应对象<ActivityAwardPoolSetting>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/awardSetting/queryAwardSettingByActivityId'

  return request('post', host + path, body, $config)
}

export interface LotteryResultgetAllLatestWinResultsParameters {
  request: 查看最近中奖信息请求参数; // request
}

/**
 * @name: LotteryResultgetAllLatestWinResults
 * @date: 2022/1/20
 * @description: 查看最近的活动中奖信息
 * @param: {request} [查看最近中奖信息请求参数]
 * @return: Promise<AxiosResponse<公共响应对象<Array<最近中奖信息条目VO>>>>
 */
export function LotteryResultgetAllLatestWinResults(parameters: Config & LotteryResultgetAllLatestWinResultsParameters): Promise<AxiosResponse<公共响应对象<Array<最近中奖信息条目VO>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lottery/result/getAllLatestWinResults'

  return request('post', host + path, body, $config)
}

export interface LotteryResultqueryAllLotteryResultParameters {
  request: 查看所有活动的中奖信息请求参数; // request
}

/**
 * @name: LotteryResultqueryAllLotteryResult
 * @date: 2022/1/20
 * @description: 查看所有活动的中奖信息
 * @param: {request} [查看所有活动的中奖信息请求参数]
 * @return: Promise<AxiosResponse<公共响应对象<Array<AllLotteryResult>>>>
 */
export function LotteryResultqueryAllLotteryResult(parameters: Config & LotteryResultqueryAllLotteryResultParameters): Promise<AxiosResponse<公共响应对象<Array<AllLotteryResult>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lottery/result/queryAllLotteryResult'

  return request('post', host + path, body, $config)
}

export interface LotteryResultqueryLotteryResultParameters {
  request: 查看中奖信息请求参数; // request
}

/**
 * @name: LotteryResultqueryLotteryResult
 * @date: 2022/1/20
 * @description: 查看中奖信息
 * @param: {request} [查看中奖信息请求参数]
 * @return: Promise<AxiosResponse<公共响应对象<Array<中奖信息条目VO>>>>
 */
export function LotteryResultqueryLotteryResult(parameters: Config & LotteryResultqueryLotteryResultParameters): Promise<AxiosResponse<公共响应对象<Array<中奖信息条目VO>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lottery/result/queryLotteryResult'

  return request('post', host + path, body, $config)
}

export interface LotteryPageSettingaddOrUpdateLotteryPageSettingParameters {
  request: AddLotteryPageSettingRequest; // request
}

/**
 * @name: LotteryPageSettingaddOrUpdateLotteryPageSetting
 * @date: 2022/1/20
 * @description: 新增/编辑
 * @param: {request} [AddLotteryPageSettingRequest]
 * @return: Promise<AxiosResponse<公共响应对象<AddLotteryPageSettingRequest>>>
 */
export function LotteryPageSettingaddOrUpdateLotteryPageSetting(parameters: Config & LotteryPageSettingaddOrUpdateLotteryPageSettingParameters): Promise<AxiosResponse<公共响应对象<AddLotteryPageSettingRequest>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lotteryPageSetting/addOrUpdateLotteryPageSetting'

  return request('post', host + path, body, $config)
}

export interface LotteryPageSettingqueryLotteryPageSettingByActivityIdParameters {
  request: QueryLotteryPageSettingByActivityIdRequest; // request
}

/**
 * @name: LotteryPageSettingqueryLotteryPageSettingByActivityId
 * @date: 2022/1/20
 * @description: 根据活动id查询活动界面参数配置
 * @param: {request} [QueryLotteryPageSettingByActivityIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<LotteryPageSettingOutVo>>>
 */
export function LotteryPageSettingqueryLotteryPageSettingByActivityId(parameters: Config & LotteryPageSettingqueryLotteryPageSettingByActivityIdParameters): Promise<AxiosResponse<公共响应对象<LotteryPageSettingOutVo>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lotteryPageSetting/queryLotteryPageSettingByActivityId'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawLotteryResultisStockParameters {
  request: LotteryStockRequest; // request
}

/**
 * @name: LuckyDrawLotteryResultisStock
 * @date: 2022/1/20
 * @description: 查询奖池数量判断是否还有库存
 * @param: {request} [LotteryStockRequest]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function LuckyDrawLotteryResultisStock(parameters: Config & LuckyDrawLotteryResultisStockParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lucky/draw/lottery/result/isStock'

  return request('post', host + path, body, $config)
}

export interface LuckyDrawLotteryResultuserInfoLotteryEditParameters {
  request: LotteryUserInfoRequest; // request
}

/**
 * @name: LuckyDrawLotteryResultuserInfoLotteryEdit
 * @date: 2022/1/20
 * @description: 向中奖结果中添加用户信息
 * @param: {request} [LotteryUserInfoRequest]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function LuckyDrawLotteryResultuserInfoLotteryEdit(parameters: Config & LuckyDrawLotteryResultuserInfoLotteryEditParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/api/v1/lucky/draw/lottery/result/userInfoEdit'

  return request('post', host + path, body, $config)
}

export interface AwardGoodsRelationqueryTheListOfInterestsParameters {
  request: QueryTheListOfInterestsRequest; // request
}

/**
 * @name: AwardGoodsRelationqueryTheListOfInterests
 * @date: 2022/1/20
 * @description: 查询权益列表
 * @param: {request} [QueryTheListOfInterestsRequest]
 * @return: Promise<AxiosResponse<公共响应对象<GoodsVO>>>
 */
export function AwardGoodsRelationqueryTheListOfInterests(parameters: Config & AwardGoodsRelationqueryTheListOfInterestsParameters): Promise<AxiosResponse<公共响应对象<GoodsVO>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/award/goods/relation/queryTheListOfInterests'

  return request('post', host + path, body, $config)
}

export interface ContentActivityPublicgetContentManagerParameters {
  activityId?: string; // activityId
  id?: number; // id
}

/**
 * @name: ContentActivityPublicgetContentManager
 * @date: 2022/1/20
 * @description: 根据视频内容id查询视频信息,H5端
 * @param: {activityId} [string]
 * @param: {id} [integer]
 * @return: Promise<AxiosResponse<ContentManagerResult>>
 */
export function ContentActivityPublicgetContentManager(parameters: Config & ContentActivityPublicgetContentManagerParameters): Promise<AxiosResponse<ContentManagerResult>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/contentActivity/getContentManager'

  return request('get', host + path, body, $config)
}

export interface ContentActivityPublicqueryContentActivityParameters {
  request: 活跃活动; // request
}

/**
 * @name: ContentActivityPublicqueryContentActivity
 * @date: 2022/1/20
 * @description: 根据活动code和用户、车型、车系查询活跃活动,H5端
 * @param: {request} [活跃活动]
 * @return: Promise<AxiosResponse<公共响应对象<响应活动内容主数据>>>
 */
export function ContentActivityPublicqueryContentActivity(parameters: Config & ContentActivityPublicqueryContentActivityParameters): Promise<AxiosResponse<公共响应对象<响应活动内容主数据>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/contentActivity/queryContentActivity'

  return request('post', host + path, body, $config)
}

export interface ContentActivityPublicqueryRightsDetailedParameters {
  request: RightsDetailedRequest; // request
}

/**
 * @name: ContentActivityPublicqueryRightsDetailed
 * @date: 2022/1/20
 * @description: 根据内容id查询权益信息,H5端
 * @param: {request} [RightsDetailedRequest]
 * @return: Promise<AxiosResponse<公共响应对象<RightsDetailedResult>>>
 */
export function ContentActivityPublicqueryRightsDetailed(parameters: Config & ContentActivityPublicqueryRightsDetailedParameters): Promise<AxiosResponse<公共响应对象<RightsDetailedResult>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/contentActivity/queryRightsDetailed'

  return request('post', host + path, body, $config)
}

export interface DominatingScreenPublicqueryDominatingScreenParameters {
  request: 霸屏列表; // request
}

/**
 * @name: DominatingScreenPublicqueryDominatingScreen
 * @date: 2022/1/20
 * @description: 根据活动code和用户、车型、车系查询霸屏活动,H5端
 * @param: {request} [霸屏列表]
 * @return: Promise<AxiosResponse<公共响应对象<Array<霸屏>>>>
 */
export function DominatingScreenPublicqueryDominatingScreen(parameters: Config & DominatingScreenPublicqueryDominatingScreenParameters): Promise<AxiosResponse<公共响应对象<Array<霸屏>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/dominatingScreen/queryDominatingScreen'

  return request('post', host + path, body, $config)
}

export interface ExaminationPaperPublicqueryExaminationPaperParameters {
  request: 答题考卷; // request
}

/**
 * @name: ExaminationPaperPublicqueryExaminationPaper
 * @date: 2022/1/20
 * @description: 根据活动code和用户、车型、车系查询答题考卷,H5端
 * @param: {request} [答题考卷]
 * @return: Promise<AxiosResponse<公共响应对象<考卷内容>>>
 */
export function ExaminationPaperPublicqueryExaminationPaper(parameters: Config & ExaminationPaperPublicqueryExaminationPaperParameters): Promise<AxiosResponse<公共响应对象<考卷内容>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/examinationPaper/queryExaminationPaper'

  return request('post', host + path, body, $config)
}

export interface ExaminationPaperPublicqueryExaminationPaperPrizeSettingParameters {
  request: ExaminationPaperPrizeSettingRequest; // request
}

/**
 * @name: ExaminationPaperPublicqueryExaminationPaperPrizeSetting
 * @date: 2022/1/20
 * @description: 根据考卷id查询奖品信息,H5端
 * @param: {request} [ExaminationPaperPrizeSettingRequest]
 * @return: Promise<AxiosResponse<公共响应对象<考卷奖品>>>
 */
export function ExaminationPaperPublicqueryExaminationPaperPrizeSetting(parameters: Config & ExaminationPaperPublicqueryExaminationPaperPrizeSettingParameters): Promise<AxiosResponse<公共响应对象<考卷奖品>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/examinationPaper/queryExaminationPaperPrizeSetting'

  return request('post', host + path, body, $config)
}

export interface ExtensionActivityPublicqueryExtensionActivityParameters {
  request: 推广活动列表; // request
}

/**
 * @name: ExtensionActivityPublicqueryExtensionActivity
 * @date: 2022/1/20
 * @description: 根据活动code和用户、车型、车系查询推广活动,H5端
 * @param: {request} [推广活动列表]
 * @return: Promise<AxiosResponse<公共响应对象<Array<推广活动>>>>
 */
export function ExtensionActivityPublicqueryExtensionActivity(parameters: Config & ExtensionActivityPublicqueryExtensionActivityParameters): Promise<AxiosResponse<公共响应对象<Array<推广活动>>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/extensionActivity/queryExtensionActivity'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfoPubliccheckByIdParameters {
  request?: CheckActivityByIdRequest; // request
}

/**
 * @name: TspActivityInfoPubliccheckById
 * @date: 2022/1/20
 * @description: 根据活动id校验该活动是否有效
 * @param: {request} [CheckActivityByIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<boolean>>>
 */
export function TspActivityInfoPubliccheckById(parameters: Config & TspActivityInfoPubliccheckByIdParameters): Promise<AxiosResponse<公共响应对象<boolean>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/info/checkActivityById'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfoPublicqueryAwardPoolByActivityIdParameters {
  request: QueryActivityAwardByActivityIdRequest; // request
}

/**
 * @name: TspActivityInfoPublicqueryAwardPoolByActivityId
 * @date: 2022/1/20
 * @description: 奖项、页面配置的信息
 * @param: {request} [QueryActivityAwardByActivityIdRequest]
 * @return: Promise<AxiosResponse<公共响应对象<AwardAndPageSettingVo>>>
 */
export function TspActivityInfoPublicqueryAwardPoolByActivityId(parameters: Config & TspActivityInfoPublicqueryAwardPoolByActivityIdParameters): Promise<AxiosResponse<公共响应对象<AwardAndPageSettingVo>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/info/queryAwardPoolByActivityId'

  return request('post', host + path, body, $config)
}

export interface TspActivityInfoPublicqueryLotteryDrawRuleParameters {
  request: QueryLotteryDrawRuleRequest; // request
}

/**
 * @name: TspActivityInfoPublicqueryLotteryDrawRule
 * @date: 2022/1/20
 * @description: 查询抽奖规则
 * @param: {request} [QueryLotteryDrawRuleRequest]
 * @return: Promise<AxiosResponse<公共响应对象<抽奖规则>>>
 */
export function TspActivityInfoPublicqueryLotteryDrawRule(parameters: Config & TspActivityInfoPublicqueryLotteryDrawRuleParameters): Promise<AxiosResponse<公共响应对象<抽奖规则>>> {
    const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '/public/v1/api/info/queryLotteryDrawRule'

  return request('post', host + path, body, $config)
}
  