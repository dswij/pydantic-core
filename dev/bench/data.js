window.BENCHMARK_DATA = {
  "lastUpdate": 1655104069013,
  "repoUrl": "https://github.com/dswij/pydantic-core",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "6b430f9de18cfd75141ee518d25fba625137b5dd",
          "message": "temporarily remove paths restriction on benchmarks",
          "timestamp": "2022-05-11T10:32:59+01:00",
          "tree_id": "0ef483164d7dc40843bccf3a93b4297be801364a",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6b430f9de18cfd75141ee518d25fba625137b5dd"
        },
        "date": 1652261877752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 25350.024953455166,
            "unit": "iter/sec",
            "range": "stddev: 0.001305452273109351",
            "extra": "mean: 39.447692924803285 usec\nrounds: 54345"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 215947.6208061508,
            "unit": "iter/sec",
            "range": "stddev: 0.00001279990227496455",
            "extra": "mean: 4.630752569845017 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 940784.8753177086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010477713747522003",
            "extra": "mean: 1.0629422583591523 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 170268.86398776842,
            "unit": "iter/sec",
            "range": "stddev: 0.0004811225320834584",
            "extra": "mean: 5.8730643793559745 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1676.6594747657155,
            "unit": "iter/sec",
            "range": "stddev: 0.027675612373301333",
            "extra": "mean: 596.424029476667 usec\nrounds: 9058"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17358.965045785382,
            "unit": "iter/sec",
            "range": "stddev: 0.000029691219797545142",
            "extra": "mean: 57.607121009947086 usec\nrounds: 20081"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3120.596545716897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001095284458401033",
            "extra": "mean: 320.45155000012 usec\nrounds: 3540"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5910.097709442715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007716428180793458",
            "extra": "mean: 169.2019403337908 usec\nrounds: 6771"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2501.5343584087886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006278202012118965",
            "extra": "mean: 399.75465323454284 usec\nrounds: 2829"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4411.128098346912,
            "unit": "iter/sec",
            "range": "stddev: 0.00006489568629268579",
            "extra": "mean: 226.69937886744978 usec\nrounds: 5139"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 768.739356314636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003579689462154051",
            "extra": "mean: 1.3008310187135932 msec\nrounds: 855"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1378.8414408907752,
            "unit": "iter/sec",
            "range": "stddev: 0.00010030355235325868",
            "extra": "mean: 725.2465514482711 usec\nrounds: 1623"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1500.8985567655768,
            "unit": "iter/sec",
            "range": "stddev: 0.00009544097699597142",
            "extra": "mean: 666.2675471918577 usec\nrounds: 1727"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 267.20326498035223,
            "unit": "iter/sec",
            "range": "stddev: 0.08880268475463554",
            "extra": "mean: 3.7424692399381088 msec\nrounds: 1292"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27273.29488253122,
            "unit": "iter/sec",
            "range": "stddev: 0.000017312752550409826",
            "extra": "mean: 36.66590356270113 usec\nrounds: 32363"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "22c1cae28b8eac6039f51d7a33c236d20bba3fed",
          "message": "tweaks to benchmarks CI",
          "timestamp": "2022-05-11T10:40:22+01:00",
          "tree_id": "586e12010011afafe3d6e41d99968d9a93093ba8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/22c1cae28b8eac6039f51d7a33c236d20bba3fed"
        },
        "date": 1652262182317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 34478.43001360939,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853902776968035",
            "extra": "mean: 29.003640815584646 usec\nrounds: 64936"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 22047.052882601965,
            "unit": "iter/sec",
            "range": "stddev: 0.0017989817789205095",
            "extra": "mean: 45.35753623510977 usec\nrounds: 40320"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 304774.7114874032,
            "unit": "iter/sec",
            "range": "stddev: 4.850711985617787e-7",
            "extra": "mean: 3.2811121208832037 usec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1219172.8936220936,
            "unit": "iter/sec",
            "range": "stddev: 4.7599405274193255e-8",
            "extra": "mean: 820.2282098224388 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 191828.7480400903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004203535846785866",
            "extra": "mean: 5.212982987258082 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 2191.7446912232904,
            "unit": "iter/sec",
            "range": "stddev: 0.019210177770001724",
            "extra": "mean: 456.25752123613654 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 22880.06102813421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010866602842384837",
            "extra": "mean: 43.706177128214875 usec\nrounds: 22989"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3867.060942662483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017846776508847355",
            "extra": "mean: 258.59432132752914 usec\nrounds: 3887"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 8181.079786855855,
            "unit": "iter/sec",
            "range": "stddev: 0.000001259592010680422",
            "extra": "mean: 122.23325356228057 usec\nrounds: 8211"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3429.0223473492,
            "unit": "iter/sec",
            "range": "stddev: 0.000002707741346858946",
            "extra": "mean: 291.62831230104064 usec\nrounds: 3455"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 6206.210226807806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015960080522008193",
            "extra": "mean: 161.12892787300163 usec\nrounds: 6239"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1083.6496892849405,
            "unit": "iter/sec",
            "range": "stddev: 0.000004191645523801962",
            "extra": "mean: 922.8074440365154 usec\nrounds: 1090"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1904.825536775508,
            "unit": "iter/sec",
            "range": "stddev: 0.000008904548536466302",
            "extra": "mean: 524.9824620121387 usec\nrounds: 1948"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1992.8849188928682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001021306419722112",
            "extra": "mean: 501.7851209168377 usec\nrounds: 2051"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 329.2671309190059,
            "unit": "iter/sec",
            "range": "stddev: 0.07157791471822271",
            "extra": "mean: 3.0370477527135344 msec\nrounds: 1290"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 37822.93552312102,
            "unit": "iter/sec",
            "range": "stddev: 6.427638900628171e-7",
            "extra": "mean: 26.43898434030071 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c4102a3c89515fd3999d7a5e05121df6ef3abf",
          "message": "add benchmarks to CI (#66)\n\n* add benchmarks to CI\r\n\r\n* improving benchmarks\r\n\r\n* decrease warmup iterations\r\n\r\n* add link to benchmarks to readme\r\n\r\n* remove benchmarks from ci.yml",
          "timestamp": "2022-05-11T11:10:40+01:00",
          "tree_id": "daa9781b24da75fe5a2b37456432b0e61eacf7a8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/18c4102a3c89515fd3999d7a5e05121df6ef3abf"
        },
        "date": 1652263966333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 35948.72849252688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112228789003178",
            "extra": "mean: 27.81739555010639 usec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 24233.791619751304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010573158437508264",
            "extra": "mean: 41.26469417955086 usec\nrounds: 34723"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 252491.87851524877,
            "unit": "iter/sec",
            "range": "stddev: 1.63212302457631e-7",
            "extra": "mean: 3.9605234270519594 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 984497.5109723401,
            "unit": "iter/sec",
            "range": "stddev: 4.589521201877868e-8",
            "extra": "mean: 1.015746600529712 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 212081.125326338,
            "unit": "iter/sec",
            "range": "stddev: 0.0003119399855076994",
            "extra": "mean: 4.715176791245636 usec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 2528.0329095564457,
            "unit": "iter/sec",
            "range": "stddev: 0.013044415433749774",
            "extra": "mean: 395.5644707866775 usec\nrounds: 8592"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 19320.4844170213,
            "unit": "iter/sec",
            "range": "stddev: 9.700711282877019e-7",
            "extra": "mean: 51.758536608895916 usec\nrounds: 19763"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3797.688620750334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021026532075322585",
            "extra": "mean: 263.3180599736541 usec\nrounds: 3835"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7027.210504976325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015235936252939916",
            "extra": "mean: 142.30397670481753 usec\nrounds: 7083"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3102.381270728865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025815862512631983",
            "extra": "mean: 322.33304443752746 usec\nrounds: 3128"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5517.800116951731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020278599697715628",
            "extra": "mean: 181.23164645413846 usec\nrounds: 5541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 919.2315866008385,
            "unit": "iter/sec",
            "range": "stddev: 0.000004035725505970004",
            "extra": "mean: 1.0878651414686795 msec\nrounds: 926"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1621.6838047974477,
            "unit": "iter/sec",
            "range": "stddev: 0.000004152889618443191",
            "extra": "mean: 616.6430206934838 usec\nrounds: 1643"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1719.9167879850604,
            "unit": "iter/sec",
            "range": "stddev: 0.000006697017179830309",
            "extra": "mean: 581.4234775692452 usec\nrounds: 1761"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 422.58846569927977,
            "unit": "iter/sec",
            "range": "stddev: 0.04453661325612685",
            "extra": "mean: 2.3663684202673316 msec\nrounds: 1273"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 34154.59513672076,
            "unit": "iter/sec",
            "range": "stddev: 7.825404243656271e-7",
            "extra": "mean: 29.278637208170743 usec\nrounds: 35089"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69098c4f8a4b20f08a8b982f66079bba10481600",
          "message": "List as enum (#54)\n\n* use enum dispatch for sequences\r\n\r\n* rename ListInput GenericSequence\r\n\r\n* implement generic dict as enum\r\n\r\n* more enum dispatch on sequences\r\n\r\n* more enum dispatch on mappings\r\n\r\n* a few more inlines\r\n\r\n* tweak dict validator\r\n\r\n* incorporate enumerate\r\n\r\n* remove unenecessary iterator\r\n\r\n* more list and dict tests",
          "timestamp": "2022-05-11T11:13:05+01:00",
          "tree_id": "dd48feedd71ddc6c8e903078fbdc6ea0e03e7d39",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/69098c4f8a4b20f08a8b982f66079bba10481600"
        },
        "date": 1652264131174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 26425.928721566695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253042824140784",
            "extra": "mean: 37.8416217850418 usec\nrounds: 55249"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 15692.497237175516,
            "unit": "iter/sec",
            "range": "stddev: 0.0022479104248595686",
            "extra": "mean: 63.72472047540022 usec\nrounds: 30212"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 202749.6986856139,
            "unit": "iter/sec",
            "range": "stddev: 0.000009514269588002117",
            "extra": "mean: 4.932189820664601 usec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 967009.3276073326,
            "unit": "iter/sec",
            "range": "stddev: 9.963077551663712e-7",
            "extra": "mean: 1.0341161883869452 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 160385.82002064548,
            "unit": "iter/sec",
            "range": "stddev: 0.000484811131064702",
            "extra": "mean: 6.234965160082686 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1393.2334570120404,
            "unit": "iter/sec",
            "range": "stddev: 0.027217136197092463",
            "extra": "mean: 717.7547990733889 usec\nrounds: 7988"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17714.985874435533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005837626954685201",
            "extra": "mean: 56.44938173183069 usec\nrounds: 20834"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2930.935027629462,
            "unit": "iter/sec",
            "range": "stddev: 0.00007522970552979807",
            "extra": "mean: 341.18804769575496 usec\nrounds: 3732"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5072.416889774781,
            "unit": "iter/sec",
            "range": "stddev: 0.00007534671856079127",
            "extra": "mean: 197.1446791007749 usec\nrounds: 6407"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2325.300805720719,
            "unit": "iter/sec",
            "range": "stddev: 0.00008595765958114616",
            "extra": "mean: 430.0518872826234 usec\nrounds: 3043"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 3893.5109545926093,
            "unit": "iter/sec",
            "range": "stddev: 0.00012570944997130018",
            "extra": "mean: 256.83759764960854 usec\nrounds: 4936"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 791.3929305485312,
            "unit": "iter/sec",
            "range": "stddev: 0.00014191811760875798",
            "extra": "mean: 1.2635948103641494 msec\nrounds: 907"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1517.635066037196,
            "unit": "iter/sec",
            "range": "stddev: 0.00008983328680023544",
            "extra": "mean: 658.9199356148052 usec\nrounds: 1724"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.3250879528025,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173224075931947",
            "extra": "mean: 687.6041734297945 usec\nrounds: 1799"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 277.75573655824604,
            "unit": "iter/sec",
            "range": "stddev: 0.07403441379634378",
            "extra": "mean: 3.600285676873131 msec\nrounds: 1241"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 24912.50305087494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001950293516996522",
            "extra": "mean: 40.14048680527424 usec\nrounds: 30770"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1755071+adriangb@users.noreply.github.com",
            "name": "Adrian Garcia Badaracco",
            "username": "adriangb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6d4184389f3dda4cecc1dc3402dc63d76a8ccab",
          "message": "implement __reduce__ to make SchemaValidator picklable (#53)\n\n* attempt at implementing __reduce__\r\n\r\n* python version\r\n\r\n* remove loc\r\n\r\n* back to rust\r\n\r\n* use array\r\n\r\n* minimize changes\r\n\r\n* again use array\r\n\r\n* remove import\r\n\r\n* test all protocol versions\r\n\r\n* Update src/validators/mod.rs\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* Update src/validators/mod.rs\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* pr feedback\r\n\r\n* pointlessly tweak layout\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-05-11T12:22:54+01:00",
          "tree_id": "009c56dc5106873a6189dc7f72b41e81c90c6b15",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/f6d4184389f3dda4cecc1dc3402dc63d76a8ccab"
        },
        "date": 1652268315085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 27646.82615096265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007975823425689881",
            "extra": "mean: 36.17051717038343 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 15149.687370138572,
            "unit": "iter/sec",
            "range": "stddev: 0.0022246765055872137",
            "extra": "mean: 66.0079627762545 usec\nrounds: 27778"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 210741.81608731038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067515951706193614",
            "extra": "mean: 4.745142746543001 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 883093.3428389295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014495441739468722",
            "extra": "mean: 1.1323831258711896 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 161641.09455036782,
            "unit": "iter/sec",
            "range": "stddev: 0.00042499719434656096",
            "extra": "mean: 6.186545585958117 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1572.7391911969876,
            "unit": "iter/sec",
            "range": "stddev: 0.022113796840178408",
            "extra": "mean: 635.833331805584 usec\nrounds: 7200"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 16907.91211195713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005580116911805513",
            "extra": "mean: 59.143908093348124 usec\nrounds: 17953"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2832.9325369466587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803674449148478",
            "extra": "mean: 352.99110972752015 usec\nrounds: 2971"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5210.640827559687,
            "unit": "iter/sec",
            "range": "stddev: 0.00011717054010032895",
            "extra": "mean: 191.91497420257474 usec\nrounds: 5737"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2324.545962760404,
            "unit": "iter/sec",
            "range": "stddev: 0.00010386925226006375",
            "extra": "mean: 430.19153676466675 usec\nrounds: 2448"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4094.5118114319876,
            "unit": "iter/sec",
            "range": "stddev: 0.00005619113276618101",
            "extra": "mean: 244.22936019087138 usec\nrounds: 4406"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 695.119966686474,
            "unit": "iter/sec",
            "range": "stddev: 0.00026569760420190066",
            "extra": "mean: 1.4386005983497214 msec\nrounds: 727"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1321.9664933888203,
            "unit": "iter/sec",
            "range": "stddev: 0.00011226090217757379",
            "extra": "mean: 756.4488245360371 usec\nrounds: 1402"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 653.3834516478503,
            "unit": "iter/sec",
            "range": "stddev: 0.033256881933444185",
            "extra": "mean: 1.5304948380280732 msec\nrounds: 1562"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 302.54897093272393,
            "unit": "iter/sec",
            "range": "stddev: 0.06511875669096467",
            "extra": "mean: 3.3052500456938065 msec\nrounds: 1138"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26686.354120505068,
            "unit": "iter/sec",
            "range": "stddev: 0.000025274712767584005",
            "extra": "mean: 37.47233494258503 usec\nrounds: 27548"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1755071+adriangb@users.noreply.github.com",
            "name": "Adrian Garcia Badaracco",
            "username": "adriangb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d0da7806d338ed9f2d34561921ed1dc0a1eb67b",
          "message": "add types (#50)\n\n* add types\r\n\r\n* guard versions\r\n\r\n* move TypedDict\r\n\r\n* remove mypy in favor of pyright, add test for typing\r\n\r\n* revert unecessary change\r\n\r\n* Update pydantic_core/_types.py\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* pr feedback\r\n\r\n* fix filename\r\n\r\n* Update Makefile\r\n\r\n* a few tweaks\r\n\r\n* :-( fix tests\r\n\r\n* fix pyright complaint with pytest\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-05-11T12:25:50+01:00",
          "tree_id": "082d7ece6733b164470ad48b37be1e2ac9ddf592",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6d0da7806d338ed9f2d34561921ed1dc0a1eb67b"
        },
        "date": 1652268498810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 25888.45636406876,
            "unit": "iter/sec",
            "range": "stddev: 0.0011369151152302384",
            "extra": "mean: 38.62725478634273 usec\nrounds: 52911"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 17969.151835993896,
            "unit": "iter/sec",
            "range": "stddev: 0.0015764323353242965",
            "extra": "mean: 55.650929388715284 usec\nrounds: 30675"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 206548.13777352165,
            "unit": "iter/sec",
            "range": "stddev: 0.000005368090415345586",
            "extra": "mean: 4.841486400117011 usec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 924146.7842567787,
            "unit": "iter/sec",
            "range": "stddev: 0.000001241803955507628",
            "extra": "mean: 1.0820791859426202 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 172170.43180692432,
            "unit": "iter/sec",
            "range": "stddev: 0.00044408414093048194",
            "extra": "mean: 5.808198245802231 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1574.7511305022754,
            "unit": "iter/sec",
            "range": "stddev: 0.023881813937707237",
            "extra": "mean: 635.0209760961052 usec\nrounds: 8827"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 18199.33484699339,
            "unit": "iter/sec",
            "range": "stddev: 0.000019786986406034487",
            "extra": "mean: 54.947063088143814 usec\nrounds: 23697"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2909.444171372192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006072032027683822",
            "extra": "mean: 343.7082621621044 usec\nrounds: 3700"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5538.861457677753,
            "unit": "iter/sec",
            "range": "stddev: 0.000033933606324276596",
            "extra": "mean: 180.54251900701345 usec\nrounds: 6366"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2379.620570168635,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199910384062807",
            "extra": "mean: 420.2350629071649 usec\nrounds: 3068"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4364.255145223726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004341270610409454",
            "extra": "mean: 229.13417449811746 usec\nrounds: 5129"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 796.2700752827271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001432222183208433",
            "extra": "mean: 1.2558553071895056 msec\nrounds: 918"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1470.3445720979482,
            "unit": "iter/sec",
            "range": "stddev: 0.00008388658171775615",
            "extra": "mean: 680.1126885333815 usec\nrounds: 1875"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.207870762067,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392745442016923",
            "extra": "mean: 687.6595981260625 usec\nrounds: 2028"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 272.6086190203901,
            "unit": "iter/sec",
            "range": "stddev: 0.080465091017438",
            "extra": "mean: 3.668262594166928 msec\nrounds: 1200"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26621.840067271758,
            "unit": "iter/sec",
            "range": "stddev: 0.000022022978230362823",
            "extra": "mean: 37.56314354954659 usec\nrounds: 34246"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6339ef58bba2171a3df38092cc40719b5dbb7d5d",
          "message": "fix memory leak in create_class (#58)",
          "timestamp": "2022-05-11T14:11:13+01:00",
          "tree_id": "e5861ba166c3eb8e13faf27a72d3db0ab804a4db",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6339ef58bba2171a3df38092cc40719b5dbb7d5d"
        },
        "date": 1652274782216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56125.25611919934,
            "unit": "iter/sec",
            "range": "stddev: 0.000002154338167947614",
            "extra": "mean: 17.81729063073121 usec\nrounds: 57475"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34160.19355471772,
            "unit": "iter/sec",
            "range": "stddev: 6.911352924156852e-7",
            "extra": "mean: 29.273838814707016 usec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 234944.5620142351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023605789465374043",
            "extra": "mean: 4.2563232424992705 usec\nrounds: 129887"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1024324.3809719951,
            "unit": "iter/sec",
            "range": "stddev: 4.427042584890591e-8",
            "extra": "mean: 976.2532441637159 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 765535.4243188262,
            "unit": "iter/sec",
            "range": "stddev: 4.470620026427993e-8",
            "extra": "mean: 1.3062752790175831 usec\nrounds: 78132"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10427.019403788283,
            "unit": "iter/sec",
            "range": "stddev: 0.00000194715001742517",
            "extra": "mean: 95.90468390580398 usec\nrounds: 10538"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20393.04444770523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023794466795897523",
            "extra": "mean: 49.03632719304582 usec\nrounds: 21009"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3683.5354149789714,
            "unit": "iter/sec",
            "range": "stddev: 0.000002198173636732866",
            "extra": "mean: 271.47831833882583 usec\nrounds: 3757"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6820.068456141803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015401239190294125",
            "extra": "mean: 146.62609421456048 usec\nrounds: 6931"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3014.1975643744013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020176237266691643",
            "extra": "mean: 331.7632566024419 usec\nrounds: 3067"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5382.471981961838,
            "unit": "iter/sec",
            "range": "stddev: 0.000001745317168273361",
            "extra": "mean: 185.78824067292473 usec\nrounds: 5468"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 929.9173587121096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033152685632784797",
            "extra": "mean: 1.0753643758031912 msec\nrounds: 934"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1850.5713348190318,
            "unit": "iter/sec",
            "range": "stddev: 0.000003248757742732661",
            "extra": "mean: 540.3736571429117 usec\nrounds: 1855"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1474.6477681124256,
            "unit": "iter/sec",
            "range": "stddev: 0.0010653025899753955",
            "extra": "mean: 678.1280395385652 usec\nrounds: 1821"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 935.8844736930756,
            "unit": "iter/sec",
            "range": "stddev: 0.001402963879981752",
            "extra": "mean: 1.0685079495484302 msec\nrounds: 1328"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 30496.26866248678,
            "unit": "iter/sec",
            "range": "stddev: 8.639986591884395e-7",
            "extra": "mean: 32.79089684929528 usec\nrounds: 32787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e50eecc6853047adc478d82b7c2992fdc1a6c3d3",
          "message": "prevent segfault on recursive schema (#67)\n\n* prevent segfault on recursive schema, fix #62\r\n\r\n* linting\r\n\r\n* use RecursionError",
          "timestamp": "2022-05-11T16:36:47+01:00",
          "tree_id": "d7f035fc984c71bb47dd761f2fc6fae0495e928c",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/e50eecc6853047adc478d82b7c2992fdc1a6c3d3"
        },
        "date": 1652283520286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55709.571435547376,
            "unit": "iter/sec",
            "range": "stddev: 6.481608376856237e-7",
            "extra": "mean: 17.950236812662254 usec\nrounds: 58143"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34565.2795029435,
            "unit": "iter/sec",
            "range": "stddev: 8.692515433221771e-7",
            "extra": "mean: 28.930765623198337 usec\nrounds: 35716"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 241221.31519455774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016244103551572994",
            "extra": "mean: 4.1455706316560255 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 997906.3101180287,
            "unit": "iter/sec",
            "range": "stddev: 1.0637072850682701e-7",
            "extra": "mean: 1.0020980826162114 usec\nrounds: 106395"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 830043.0768864807,
            "unit": "iter/sec",
            "range": "stddev: 1.1702857145750747e-7",
            "extra": "mean: 1.2047567503978138 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10442.104444550348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026421794288242446",
            "extra": "mean: 95.76613653983244 usec\nrounds: 10583"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20855.224381190576,
            "unit": "iter/sec",
            "range": "stddev: 0.000002627183840884538",
            "extra": "mean: 47.94961596778142 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3663.0218690554293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002769266335433024",
            "extra": "mean: 272.9986431279119 usec\nrounds: 3696"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6729.568454447578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018087208691076866",
            "extra": "mean: 148.59793860022316 usec\nrounds: 6873"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2989.564243855891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025352383145618274",
            "extra": "mean: 334.4969093924592 usec\nrounds: 3013"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5372.706200664851,
            "unit": "iter/sec",
            "range": "stddev: 0.000002161086198724889",
            "extra": "mean: 186.12594149969598 usec\nrounds: 5453"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 931.5784065113894,
            "unit": "iter/sec",
            "range": "stddev: 0.000005302604681338501",
            "extra": "mean: 1.073446950906514 msec\nrounds: 937"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1880.300090318752,
            "unit": "iter/sec",
            "range": "stddev: 0.000003566986056951173",
            "extra": "mean: 531.8300015772897 usec\nrounds: 1902"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1404.8927403231994,
            "unit": "iter/sec",
            "range": "stddev: 0.00133086584340705",
            "extra": "mean: 711.7981119113387 usec\nrounds: 1805"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 948.7103590527059,
            "unit": "iter/sec",
            "range": "stddev: 0.0016930162646991893",
            "extra": "mean: 1.0540624864668993 msec\nrounds: 1330"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32360.621031643448,
            "unit": "iter/sec",
            "range": "stddev: 7.493183377878723e-7",
            "extra": "mean: 30.90175553250854 usec\nrounds: 32896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "82fec734e74537c29153019d83acb29829e79c6c",
          "message": "parse strings as ints in benchmarks",
          "timestamp": "2022-05-24T11:47:30+01:00",
          "tree_id": "c2c0ed9db7b7ecc4804f25b40263455f48c22464",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/82fec734e74537c29153019d83acb29829e79c6c"
        },
        "date": 1653389430856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 64086.09499215597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013476486408914612",
            "extra": "mean: 15.604008952681516 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 40153.137587415746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017862361528299602",
            "extra": "mean: 24.90465403414468 usec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 279512.08887102816,
            "unit": "iter/sec",
            "range": "stddev: 4.21640008115128e-7",
            "extra": "mean: 3.577662791040919 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1259386.6117416825,
            "unit": "iter/sec",
            "range": "stddev: 8.73830345989386e-8",
            "extra": "mean: 794.0373437961391 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1020671.9227982287,
            "unit": "iter/sec",
            "range": "stddev: 9.542437246556943e-8",
            "extra": "mean: 979.7467508062863 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 12307.841938735806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036890542666971796",
            "extra": "mean: 81.24901221332344 usec\nrounds: 12691"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 24292.789814105196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022057831277830815",
            "extra": "mean: 41.16447751173342 usec\nrounds: 24391"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3040.1844579265758,
            "unit": "iter/sec",
            "range": "stddev: 0.000010293146530047925",
            "extra": "mean: 328.92741010918996 usec\nrounds: 3304"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7451.954583948222,
            "unit": "iter/sec",
            "range": "stddev: 0.000005148469156432471",
            "extra": "mean: 134.192981013872 usec\nrounds: 8111"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3378.4360368103967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009029967955373785",
            "extra": "mean: 295.99494828503737 usec\nrounds: 3674"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 6140.793835723087,
            "unit": "iter/sec",
            "range": "stddev: 0.000005836808675612388",
            "extra": "mean: 162.84539535958035 usec\nrounds: 6680"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1071.3721165641903,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069582720802522",
            "extra": "mean: 933.3825143843809 usec\nrounds: 1182"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 2064.3741253487347,
            "unit": "iter/sec",
            "range": "stddev: 0.000013973007226040953",
            "extra": "mean: 484.4083190739809 usec\nrounds: 2244"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1354.388385646058,
            "unit": "iter/sec",
            "range": "stddev: 0.00200552327167778",
            "extra": "mean: 738.3406492540092 usec\nrounds: 2278"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 931.1960432882586,
            "unit": "iter/sec",
            "range": "stddev: 0.0024575087700413937",
            "extra": "mean: 1.07388772451049 msec\nrounds: 1677"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 36854.50335359227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017147740033953777",
            "extra": "mean: 27.133726112267045 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "8f26e13100a91deadebafe58e7d7bf8d5244b9fc",
          "message": "parse longer strings as ints in benchmarks",
          "timestamp": "2022-05-24T11:55:47+01:00",
          "tree_id": "4af27a74b5479d969e010fbf02e8960488a73e8b",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/8f26e13100a91deadebafe58e7d7bf8d5244b9fc"
        },
        "date": 1653389846281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55691.651898372584,
            "unit": "iter/sec",
            "range": "stddev: 4.6122949876646734e-7",
            "extra": "mean: 17.95601254250499 usec\nrounds: 57804"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34857.93643657332,
            "unit": "iter/sec",
            "range": "stddev: 5.352251937475953e-7",
            "extra": "mean: 28.68787146420949 usec\nrounds: 35461"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 247168.06790147963,
            "unit": "iter/sec",
            "range": "stddev: 1.4497463481118679e-7",
            "extra": "mean: 4.045830064094674 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1098799.7608589416,
            "unit": "iter/sec",
            "range": "stddev: 3.635833604369633e-8",
            "extra": "mean: 910.0839257712566 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 892779.3150418202,
            "unit": "iter/sec",
            "range": "stddev: 3.2199636709558666e-8",
            "extra": "mean: 1.1200976357223995 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10768.835327802735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015697880561416354",
            "extra": "mean: 92.8605526558868 usec\nrounds: 10882"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 21260.02314876261,
            "unit": "iter/sec",
            "range": "stddev: 9.087576133163245e-7",
            "extra": "mean: 47.03663740169552 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3642.481443061177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026963406455467546",
            "extra": "mean: 274.5381179374219 usec\nrounds: 3646"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6862.012965501256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014710134474737006",
            "extra": "mean: 145.72983248902273 usec\nrounds: 6907"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2999.013680789453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023197147019880625",
            "extra": "mean: 333.44296039915446 usec\nrounds: 3005"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5303.614705359805,
            "unit": "iter/sec",
            "range": "stddev: 0.000019881365910791523",
            "extra": "mean: 188.55064999148698 usec\nrounds: 5397"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 934.5958367385317,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504622997816105",
            "extra": "mean: 1.0699812268474358 msec\nrounds: 961"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1803.5640571036258,
            "unit": "iter/sec",
            "range": "stddev: 0.000003232822699377603",
            "extra": "mean: 554.4577116966485 usec\nrounds: 1821"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1364.2742095173735,
            "unit": "iter/sec",
            "range": "stddev: 0.0014005945568061216",
            "extra": "mean: 732.990474366411 usec\nrounds: 1853"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 944.6270277142688,
            "unit": "iter/sec",
            "range": "stddev: 0.0018184115736810226",
            "extra": "mean: 1.0586188735460154 msec\nrounds: 1376"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32076.68487655751,
            "unit": "iter/sec",
            "range": "stddev: 5.614303075727336e-7",
            "extra": "mean: 31.17529145696806 usec\nrounds: 32787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d7042df471e03ca64087b7b6e6533ded24b34b",
          "message": "Switch from setuptools-rust to maturin (#70)\n\n* Switch from setuptools-rust to maturin\r\n\r\n* Update project metadata\r\n\r\n* Fix CI lint job\r\n\r\n* Build wheels on CI\r\n\r\n* Change `mimalloc` to optional dependency\r\n\r\nEnabled by default.\r\n\r\n* fix clippy errors\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-08T09:54:54+01:00",
          "tree_id": "896b00dd95e2ff37f90e93bf28137b8e7805a5f4",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a8d7042df471e03ca64087b7b6e6533ded24b34b"
        },
        "date": 1654678699778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55409.0363429414,
            "unit": "iter/sec",
            "range": "stddev: 5.542860656464437e-7",
            "extra": "mean: 18.047597756631816 usec\nrounds: 57147"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 33566.91287803917,
            "unit": "iter/sec",
            "range": "stddev: 7.642613967549552e-7",
            "extra": "mean: 29.791241262887787 usec\nrounds: 34365"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 255187.289782605,
            "unit": "iter/sec",
            "range": "stddev: 1.869520650607709e-7",
            "extra": "mean: 3.9186904678987102 usec\nrounds: 131597"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 936917.195705996,
            "unit": "iter/sec",
            "range": "stddev: 4.056023478080951e-8",
            "extra": "mean: 1.067330180920298 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 776848.2797704606,
            "unit": "iter/sec",
            "range": "stddev: 5.358308530974423e-8",
            "extra": "mean: 1.2872526412692764 usec\nrounds: 80000"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10509.95984531618,
            "unit": "iter/sec",
            "range": "stddev: 0.000001325223228286849",
            "extra": "mean: 95.14784211527271 usec\nrounds: 10628"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20275.501873252815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010082256779005542",
            "extra": "mean: 49.32060405958125 usec\nrounds: 20791"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3742.2875128440696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022728157543627434",
            "extra": "mean: 267.21624048602786 usec\nrounds: 3784"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6748.231900822012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018186302423010747",
            "extra": "mean: 148.1869643333076 usec\nrounds: 6841"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3008.384377143372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022970080924944757",
            "extra": "mean: 332.4043322381416 usec\nrounds: 3043"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5346.290310810537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018753331278366446",
            "extra": "mean: 187.04558523092857 usec\nrounds: 5403"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 927.3437898913975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005120801304529557",
            "extra": "mean: 1.07834873204587 msec\nrounds: 933"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1822.9066904548197,
            "unit": "iter/sec",
            "range": "stddev: 0.000003559616864633661",
            "extra": "mean: 548.5744307353974 usec\nrounds: 1848"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1327.7668268891325,
            "unit": "iter/sec",
            "range": "stddev: 0.0015211780575642656",
            "extra": "mean: 753.1442868948096 usec\nrounds: 1816"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 879.0550737639638,
            "unit": "iter/sec",
            "range": "stddev: 0.001988989551263764",
            "extra": "mean: 1.1375851523365546 msec\nrounds: 1326"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32949.370797906005,
            "unit": "iter/sec",
            "range": "stddev: 8.634346056137345e-7",
            "extra": "mean: 30.34959320265842 usec\nrounds: 33899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4afcb67701bf9765bf442bd850ad3d6b2572fed",
          "message": "improving coverage (#78)\n\n* improving coverage\r\n\r\n* improving to_loc and function coverage",
          "timestamp": "2022-06-08T15:09:42+01:00",
          "tree_id": "171e18fd5953e618bc0e3d73c3845363f0026824",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a4afcb67701bf9765bf442bd850ad3d6b2572fed"
        },
        "date": 1654697485474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 47490.01824546574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012883146343932272",
            "extra": "mean: 21.057056555152577 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28905.881455235834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014820035519265808",
            "extra": "mean: 34.59503566942312 usec\nrounds: 31848"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 211417.78693842815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017243557680592826",
            "extra": "mean: 4.729970994783107 usec\nrounds: 117634"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 866611.0355725328,
            "unit": "iter/sec",
            "range": "stddev: 1.827038840024979e-7",
            "extra": "mean: 1.1539202236659067 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 741514.133008035,
            "unit": "iter/sec",
            "range": "stddev: 6.917137666394715e-8",
            "extra": "mean: 1.3485919626957594 usec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9508.609003098773,
            "unit": "iter/sec",
            "range": "stddev: 0.000004512050466906279",
            "extra": "mean: 105.16785364442987 usec\nrounds: 10331"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17450.85549193271,
            "unit": "iter/sec",
            "range": "stddev: 0.000001949816194837994",
            "extra": "mean: 57.30378092135862 usec\nrounds: 19121"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3011.0326386626316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071292317785244575",
            "extra": "mean: 332.1119761903863 usec\nrounds: 3276"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5850.062775606873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243834966959953",
            "extra": "mean: 170.938336622595 usec\nrounds: 7195"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2502.9685014590727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527680174484164",
            "extra": "mean: 399.525603065745 usec\nrounds: 3066"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4483.976622429334,
            "unit": "iter/sec",
            "range": "stddev: 0.000008554539027128086",
            "extra": "mean: 223.01632773861758 usec\nrounds: 5541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 796.6257388035033,
            "unit": "iter/sec",
            "range": "stddev: 0.000021287208505593248",
            "extra": "mean: 1.2552946148864785 msec\nrounds: 927"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1420.3251044285128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867773564847241",
            "extra": "mean: 704.0641588901321 usec\nrounds: 1693"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1125.8181936665628,
            "unit": "iter/sec",
            "range": "stddev: 0.001772403411194497",
            "extra": "mean: 888.242884708766 usec\nrounds: 1648"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 771.4874019863694,
            "unit": "iter/sec",
            "range": "stddev: 0.002382660954010357",
            "extra": "mean: 1.296197445901609 msec\nrounds: 1220"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27101.37960097393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014554689213091879",
            "extra": "mean: 36.898490583264014 usec\nrounds: 27398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "afd4d486e077223bfc34052ea1cb09013210a7c0",
          "message": "init bytes type",
          "timestamp": "2022-06-09T16:49:24+08:00",
          "tree_id": "33847b8d9fb6fe16872eb9d882e512e0a813ea64",
          "url": "https://github.com/dswij/pydantic-core/commit/afd4d486e077223bfc34052ea1cb09013210a7c0"
        },
        "date": 1654764816471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 47819.91571769861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015896566825475085",
            "extra": "mean: 20.911789261683918 usec\nrounds: 52354"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29689.409946153788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033342146610517443",
            "extra": "mean: 33.68204359108687 usec\nrounds: 30029"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 227314.8504046031,
            "unit": "iter/sec",
            "range": "stddev: 6.231151418226706e-7",
            "extra": "mean: 4.399184647285808 usec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 908400.6117569,
            "unit": "iter/sec",
            "range": "stddev: 1.5964417199130988e-7",
            "extra": "mean: 1.1008358944912189 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 751158.5948015782,
            "unit": "iter/sec",
            "range": "stddev: 1.5734534577846062e-7",
            "extra": "mean: 1.3312767861815478 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9430.642334050663,
            "unit": "iter/sec",
            "range": "stddev: 0.000006617644688904433",
            "extra": "mean: 106.03731586653002 usec\nrounds: 10267"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17607.88660012471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030156549163926833",
            "extra": "mean: 56.79273286510814 usec\nrounds: 19230"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3031.854407710762,
            "unit": "iter/sec",
            "range": "stddev: 0.000011206788870272773",
            "extra": "mean: 329.831141448201 usec\nrounds: 3450"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5863.944855142856,
            "unit": "iter/sec",
            "range": "stddev: 0.000006498419965917593",
            "extra": "mean: 170.53366372007577 usec\nrounds: 7241"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2509.6411872386234,
            "unit": "iter/sec",
            "range": "stddev: 0.000014605802856854073",
            "extra": "mean: 398.4633361473906 usec\nrounds: 3079"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4503.4297477587,
            "unit": "iter/sec",
            "range": "stddev: 0.000006246582474046065",
            "extra": "mean: 222.05298095250345 usec\nrounds: 5565"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 809.2806549677957,
            "unit": "iter/sec",
            "range": "stddev: 0.00005021858440786999",
            "extra": "mean: 1.2356652712028484 msec\nrounds: 1014"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1512.553170937978,
            "unit": "iter/sec",
            "range": "stddev: 0.000008992996087586784",
            "extra": "mean: 661.1337830721488 usec\nrounds: 1784"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1109.685936418021,
            "unit": "iter/sec",
            "range": "stddev: 0.0019669933892282267",
            "extra": "mean: 901.1558740916564 usec\nrounds: 1652"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 764.3301824040738,
            "unit": "iter/sec",
            "range": "stddev: 0.002549535807065578",
            "extra": "mean: 1.308335092635837 msec\nrounds: 1263"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26611.95058925483,
            "unit": "iter/sec",
            "range": "stddev: 0.000002378275586865506",
            "extra": "mean: 37.577102687233015 usec\nrounds: 29585"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "be33ae1e1b84113266f41af9a5992fd4b08e5585",
          "message": "init bytes type",
          "timestamp": "2022-06-09T17:13:34+08:00",
          "tree_id": "36b52976ac2f9d3a7d59ef4e0238803924e91542",
          "url": "https://github.com/dswij/pydantic-core/commit/be33ae1e1b84113266f41af9a5992fd4b08e5585"
        },
        "date": 1654766119286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56754.4162716423,
            "unit": "iter/sec",
            "range": "stddev: 5.502240886394482e-7",
            "extra": "mean: 17.619774207767797 usec\nrounds: 58824"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35771.791416138454,
            "unit": "iter/sec",
            "range": "stddev: 7.408011584607144e-7",
            "extra": "mean: 27.954988006243653 usec\nrounds: 36102"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 269548.08090136526,
            "unit": "iter/sec",
            "range": "stddev: 1.5299071259883327e-7",
            "extra": "mean: 3.7099132616934725 usec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1095819.8751896063,
            "unit": "iter/sec",
            "range": "stddev: 3.946216244936575e-8",
            "extra": "mean: 912.5587358299288 nsec\nrounds: 113624"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 906025.8098570836,
            "unit": "iter/sec",
            "range": "stddev: 3.928161055111815e-8",
            "extra": "mean: 1.1037213168993472 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10819.490486004916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012072936734083562",
            "extra": "mean: 92.42579410680261 usec\nrounds: 10894"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 21175.978655578012,
            "unit": "iter/sec",
            "range": "stddev: 0.000005698545263119541",
            "extra": "mean: 47.223319227165334 usec\nrounds: 21740"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3629.174543503672,
            "unit": "iter/sec",
            "range": "stddev: 0.00007183167349741766",
            "extra": "mean: 275.5447521227738 usec\nrounds: 3651"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6962.9788479550625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015696820729775365",
            "extra": "mean: 143.61669363589797 usec\nrounds: 7008"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2986.3949302880587,
            "unit": "iter/sec",
            "range": "stddev: 0.000002885297544722167",
            "extra": "mean: 334.85189445574866 usec\nrounds: 2994"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5390.364080147212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020612157957909417",
            "extra": "mean: 185.51622583027634 usec\nrounds: 5420"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 959.7315555998628,
            "unit": "iter/sec",
            "range": "stddev: 0.000003987791612917248",
            "extra": "mean: 1.0419580289563035 msec\nrounds: 967"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1813.9969292538408,
            "unit": "iter/sec",
            "range": "stddev: 0.000003916112859806882",
            "extra": "mean: 551.2688493972998 usec\nrounds: 1826"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1254.8175311683533,
            "unit": "iter/sec",
            "range": "stddev: 0.0020105795079945377",
            "extra": "mean: 796.9286172380026 usec\nrounds: 1868"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 846.961424653902,
            "unit": "iter/sec",
            "range": "stddev: 0.002664158756025974",
            "extra": "mean: 1.1806913170911355 msec\nrounds: 1375"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32445.04500748353,
            "unit": "iter/sec",
            "range": "stddev: 7.198005098117915e-7",
            "extra": "mean: 30.821347289527488 usec\nrounds: 33223"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "5ae6fb31fa728d6b07d939c5b10b17c9dab3de55",
          "message": "init bytes type",
          "timestamp": "2022-06-09T17:27:56+08:00",
          "tree_id": "8c5466f42b5d182546f1e5e9248f9c32a4186488",
          "url": "https://github.com/dswij/pydantic-core/commit/5ae6fb31fa728d6b07d939c5b10b17c9dab3de55"
        },
        "date": 1654766988918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56610.93630966545,
            "unit": "iter/sec",
            "range": "stddev: 5.623933437844464e-7",
            "extra": "mean: 17.66443138353932 usec\nrounds: 58827"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34748.45902789437,
            "unit": "iter/sec",
            "range": "stddev: 7.733592215365311e-7",
            "extra": "mean: 28.77825457518127 usec\nrounds: 35463"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 257065.67613042507,
            "unit": "iter/sec",
            "range": "stddev: 1.5286955534820994e-7",
            "extra": "mean: 3.8900564830469206 usec\nrounds: 131597"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1042968.9910616113,
            "unit": "iter/sec",
            "range": "stddev: 3.3229985326163555e-8",
            "extra": "mean: 958.8012765187738 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 812244.2341609922,
            "unit": "iter/sec",
            "range": "stddev: 3.723213581070958e-8",
            "extra": "mean: 1.2311567850437304 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10589.702276735426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013075452865381524",
            "extra": "mean: 94.43136113438291 usec\nrounds: 10719"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20693.272335271813,
            "unit": "iter/sec",
            "range": "stddev: 9.129376537903196e-7",
            "extra": "mean: 48.324884716057866 usec\nrounds: 21009"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3804.4640169384643,
            "unit": "iter/sec",
            "range": "stddev: 0.000001972178326961017",
            "extra": "mean: 262.849115025859 usec\nrounds: 3860"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6705.657991788357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013743181274486923",
            "extra": "mean: 149.12779644064526 usec\nrounds: 6799"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3120.9157891487744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025197269672903717",
            "extra": "mean: 320.41877050221484 usec\nrounds: 3146"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5336.945877748039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015788922928090584",
            "extra": "mean: 187.3730824532845 usec\nrounds: 5397"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 931.6850684201097,
            "unit": "iter/sec",
            "range": "stddev: 0.000003817107567350229",
            "extra": "mean: 1.0733240597015623 msec\nrounds: 938"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1853.8839158908556,
            "unit": "iter/sec",
            "range": "stddev: 0.000003067950525258452",
            "extra": "mean: 539.4080996271362 usec\nrounds: 1877"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.9061735250073,
            "unit": "iter/sec",
            "range": "stddev: 0.0010717277151751723",
            "extra": "mean: 687.3295461913934 usec\nrounds: 1851"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1000.0947153311646,
            "unit": "iter/sec",
            "range": "stddev: 0.0014588221747042426",
            "extra": "mean: 999.9052936389799 usec\nrounds: 1352"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32741.967869519787,
            "unit": "iter/sec",
            "range": "stddev: 8.22562606366801e-7",
            "extra": "mean: 30.54184171168654 usec\nrounds: 33559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "b0a66ab56ee2f909dac77731fa7abc63f48b8540",
          "message": "init bytes type",
          "timestamp": "2022-06-09T17:59:46+08:00",
          "tree_id": "23e0f4d194eca1b11bc21f6fa00358989beb3970",
          "url": "https://github.com/dswij/pydantic-core/commit/b0a66ab56ee2f909dac77731fa7abc63f48b8540"
        },
        "date": 1654768902864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 57150.32726787441,
            "unit": "iter/sec",
            "range": "stddev: 5.439313892693286e-7",
            "extra": "mean: 17.49771257324233 usec\nrounds: 58140"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34475.46750821478,
            "unit": "iter/sec",
            "range": "stddev: 7.201022853565713e-7",
            "extra": "mean: 29.00613312239264 usec\nrounds: 35088"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 258400.11283085315,
            "unit": "iter/sec",
            "range": "stddev: 2.013427595787691e-7",
            "extra": "mean: 3.869967350419049 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1038641.1658676511,
            "unit": "iter/sec",
            "range": "stddev: 5.011042864932573e-8",
            "extra": "mean: 962.7964236947863 nsec\nrounds: 106395"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 811058.641298597,
            "unit": "iter/sec",
            "range": "stddev: 4.541989933998881e-8",
            "extra": "mean: 1.2329564708157654 usec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10574.05166637821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011821754098289335",
            "extra": "mean: 94.5711286033953 usec\nrounds: 10684"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20587.976506920408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020433452132088597",
            "extra": "mean: 48.572039105633415 usec\nrounds: 20662"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3824.2741004517716,
            "unit": "iter/sec",
            "range": "stddev: 0.000002401989686963071",
            "extra": "mean: 261.4875329887749 usec\nrounds: 3865"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6785.249272560418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017445824750089725",
            "extra": "mean: 147.37852064536597 usec\nrounds: 6878"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3093.0619941667064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026389528295873356",
            "extra": "mean: 323.30422147565366 usec\nrounds: 3129"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5382.132874105829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017509503380577904",
            "extra": "mean: 185.79994648796867 usec\nrounds: 5438"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 935.3522384249935,
            "unit": "iter/sec",
            "range": "stddev: 0.000004672008497181412",
            "extra": "mean: 1.0691159532411711 msec\nrounds: 941"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1867.4992140895745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030250889599132243",
            "extra": "mean: 535.4754596175347 usec\nrounds: 1882"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1377.4310506444785,
            "unit": "iter/sec",
            "range": "stddev: 0.0013874714011478573",
            "extra": "mean: 725.9891517126143 usec\nrounds: 1839"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 971.1697654686559,
            "unit": "iter/sec",
            "range": "stddev: 0.0016488807692580623",
            "extra": "mean: 1.0296860915119526 msec\nrounds: 1355"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32560.717797059762,
            "unit": "iter/sec",
            "range": "stddev: 7.831095754915342e-7",
            "extra": "mean: 30.71185365853022 usec\nrounds: 33784"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "b2fd596f8edf03a0602f53754c0b28d7dc00de64",
          "message": "run fmt",
          "timestamp": "2022-06-09T19:21:26+08:00",
          "tree_id": "2c4b9270aafb1c80c7073a1c846efdd07f057589",
          "url": "https://github.com/dswij/pydantic-core/commit/b2fd596f8edf03a0602f53754c0b28d7dc00de64"
        },
        "date": 1654773818590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 57098.89606292264,
            "unit": "iter/sec",
            "range": "stddev: 5.627379168061618e-7",
            "extra": "mean: 17.513473446106662 usec\nrounds: 58824"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35545.981623444095,
            "unit": "iter/sec",
            "range": "stddev: 0.00000778085482798646",
            "extra": "mean: 28.132575169634848 usec\nrounds: 31848"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 268220.96385166893,
            "unit": "iter/sec",
            "range": "stddev: 1.804319337423598e-7",
            "extra": "mean: 3.728269355384981 usec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1097639.51373078,
            "unit": "iter/sec",
            "range": "stddev: 3.3191800445337544e-8",
            "extra": "mean: 911.0459194385227 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 898638.0865320028,
            "unit": "iter/sec",
            "range": "stddev: 4.4303769146488856e-8",
            "extra": "mean: 1.1127950339376247 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10877.203771871222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012640570725260121",
            "extra": "mean: 91.93539267748484 usec\nrounds: 10953"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 21275.821777860452,
            "unit": "iter/sec",
            "range": "stddev: 0.000004057316716974481",
            "extra": "mean: 47.00170975490106 usec\nrounds: 21599"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3659.3615417746437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032068508849478623",
            "extra": "mean: 273.27171381788094 usec\nrounds: 3662"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6969.630071652014,
            "unit": "iter/sec",
            "range": "stddev: 0.000002304146341620106",
            "extra": "mean: 143.47963804669615 usec\nrounds: 7023"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2974.2476036536855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031640096173546203",
            "extra": "mean: 336.2194858193917 usec\nrounds: 2997"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5381.695387292366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052660180588745",
            "extra": "mean: 185.81505046927586 usec\nrounds: 5429"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 951.7786839043991,
            "unit": "iter/sec",
            "range": "stddev: 0.00000461971607145369",
            "extra": "mean: 1.0506644211633178 msec\nrounds: 964"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1809.9941673329918,
            "unit": "iter/sec",
            "range": "stddev: 0.00000416069042788918",
            "extra": "mean: 552.4879682200799 usec\nrounds: 1825"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1274.9974223988982,
            "unit": "iter/sec",
            "range": "stddev: 0.0019108266638609595",
            "extra": "mean: 784.3153110996157 usec\nrounds: 1874"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 880.7426201551774,
            "unit": "iter/sec",
            "range": "stddev: 0.0024547216611875305",
            "extra": "mean: 1.1354054829591542 msec\nrounds: 1379"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 28519.535992803845,
            "unit": "iter/sec",
            "range": "stddev: 0.000009792255955756046",
            "extra": "mean: 35.0636840743946 usec\nrounds: 33223"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "46ab988d72feffa9ddbef305c27b087c2ff56f70",
          "message": "Add more test",
          "timestamp": "2022-06-10T14:21:10+08:00",
          "tree_id": "70231dff97e6959ba4d24b1485ae237e9fb74c9d",
          "url": "https://github.com/dswij/pydantic-core/commit/46ab988d72feffa9ddbef305c27b087c2ff56f70"
        },
        "date": 1654842295869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 43293.4357752785,
            "unit": "iter/sec",
            "range": "stddev: 0.000002785710573819646",
            "extra": "mean: 23.098189877806416 usec\nrounds: 61350"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28521.091276932173,
            "unit": "iter/sec",
            "range": "stddev: 0.000003563480290162318",
            "extra": "mean: 35.06177201602376 usec\nrounds: 40323"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 223487.82208870718,
            "unit": "iter/sec",
            "range": "stddev: 8.288029036347382e-7",
            "extra": "mean: 4.474516734979314 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 909721.7968981114,
            "unit": "iter/sec",
            "range": "stddev: 1.7578380997429878e-7",
            "extra": "mean: 1.099237155149285 usec\nrounds: 111099"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 759065.6478359633,
            "unit": "iter/sec",
            "range": "stddev: 2.9564027560431434e-7",
            "extra": "mean: 1.31740911059654 usec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9757.677655820475,
            "unit": "iter/sec",
            "range": "stddev: 0.000007796513278237844",
            "extra": "mean: 102.48340181677328 usec\nrounds: 11779"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 18133.390597705613,
            "unit": "iter/sec",
            "range": "stddev: 0.000004735426366266981",
            "extra": "mean: 55.14688467177938 usec\nrounds: 25189"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3145.4052047494665,
            "unit": "iter/sec",
            "range": "stddev: 0.000021787461092208743",
            "extra": "mean: 317.92406221304344 usec\nrounds: 4356"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6037.717172226917,
            "unit": "iter/sec",
            "range": "stddev: 0.000013614117429259037",
            "extra": "mean: 165.62551233766484 usec\nrounds: 8389"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2521.4824800940123,
            "unit": "iter/sec",
            "range": "stddev: 0.00002044322732177375",
            "extra": "mean: 396.59208735121393 usec\nrounds: 3526"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4566.691772105536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000159269258393724",
            "extra": "mean: 218.97689835522584 usec\nrounds: 6444"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 745.7903073425119,
            "unit": "iter/sec",
            "range": "stddev: 0.00006566550586320356",
            "extra": "mean: 1.3408594750491167 msec\nrounds: 1002"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1371.5666342587406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380129042283931",
            "extra": "mean: 729.0932682541138 usec\nrounds: 1890"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1150.3869711649556,
            "unit": "iter/sec",
            "range": "stddev: 0.001863465472510099",
            "extra": "mean: 869.2727100232505 usec\nrounds: 2145"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 810.2944287997399,
            "unit": "iter/sec",
            "range": "stddev: 0.002310809816170382",
            "extra": "mean: 1.2341193083127378 msec\nrounds: 1612"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27483.052485401276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032095288972143477",
            "extra": "mean: 36.38606011945689 usec\nrounds: 29325"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "eeabce3da8af47c7e41c649d2e076e26d124a9e6",
          "message": "cast back into `PyBytes` after validation",
          "timestamp": "2022-06-10T16:08:12+08:00",
          "tree_id": "2a552e1a035d9afdbf03d8e6e3ac517c48f53c0a",
          "url": "https://github.com/dswij/pydantic-core/commit/eeabce3da8af47c7e41c649d2e076e26d124a9e6"
        },
        "date": 1654848609980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 47524.830120089944,
            "unit": "iter/sec",
            "range": "stddev: 0.000002776403137026065",
            "extra": "mean: 21.04163228933405 usec\nrounds: 48307"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29659.348012300256,
            "unit": "iter/sec",
            "range": "stddev: 0.00000127386529256581",
            "extra": "mean: 33.71618282321251 usec\nrounds: 30029"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 216374.00760571955,
            "unit": "iter/sec",
            "range": "stddev: 2.284567247928477e-7",
            "extra": "mean: 4.621627204974718 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 923208.8276383922,
            "unit": "iter/sec",
            "range": "stddev: 7.097002705075313e-8",
            "extra": "mean: 1.0831785507925997 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 748035.0325893769,
            "unit": "iter/sec",
            "range": "stddev: 5.791692861244607e-8",
            "extra": "mean: 1.3368357850014951 usec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9491.180784405711,
            "unit": "iter/sec",
            "range": "stddev: 0.000002894151463791555",
            "extra": "mean: 105.36096853649963 usec\nrounds: 9662"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17847.024565644133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067038300244168086",
            "extra": "mean: 56.03174895186839 usec\nrounds: 17889"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3018.97118413597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025347783528408277",
            "extra": "mean: 331.23867006574307 usec\nrounds: 3040"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5801.927414887843,
            "unit": "iter/sec",
            "range": "stddev: 0.000003834121047146965",
            "extra": "mean: 172.356516807498 usec\nrounds: 5801"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2487.7870911412374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037257974425777703",
            "extra": "mean: 401.96365820889605 usec\nrounds: 2680"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4513.994882856855,
            "unit": "iter/sec",
            "range": "stddev: 0.000004311467127912081",
            "extra": "mean: 221.53325955192747 usec\nrounds: 4554"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 793.024022913241,
            "unit": "iter/sec",
            "range": "stddev: 0.000012601565055283281",
            "extra": "mean: 1.2609958476748477 msec\nrounds: 860"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1520.926043042694,
            "unit": "iter/sec",
            "range": "stddev: 0.000005273654795326503",
            "extra": "mean: 657.4941658566426 usec\nrounds: 1646"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1096.1116764243504,
            "unit": "iter/sec",
            "range": "stddev: 0.0020803489842404176",
            "extra": "mean: 912.3157991183175 usec\nrounds: 1588"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 768.3390077611634,
            "unit": "iter/sec",
            "range": "stddev: 0.002510497459035157",
            "extra": "mean: 1.3015088260504508 msec\nrounds: 1190"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26685.024020311685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012730716378356372",
            "extra": "mean: 37.4742027302968 usec\nrounds: 27396"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "5d846073724931cc94d17d55f0e74541484bd92e",
          "message": "init bytes type",
          "timestamp": "2022-06-10T16:32:50+08:00",
          "tree_id": "b6ad433b677d814831673a248a008ca3b8617d29",
          "url": "https://github.com/dswij/pydantic-core/commit/5d846073724931cc94d17d55f0e74541484bd92e"
        },
        "date": 1654850101781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 44154.76055132568,
            "unit": "iter/sec",
            "range": "stddev: 0.00003145901182005811",
            "extra": "mean: 22.64761460630266 usec\nrounds: 49020"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 26276.203431299433,
            "unit": "iter/sec",
            "range": "stddev: 0.00003959127913748715",
            "extra": "mean: 38.057248362175095 usec\nrounds: 29155"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 207508.0225053356,
            "unit": "iter/sec",
            "range": "stddev: 0.000010070140481843826",
            "extra": "mean: 4.8190907894864035 usec\nrounds: 120482"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 902410.1201267438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023174989697975148",
            "extra": "mean: 1.1081436008927004 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 735343.7425914253,
            "unit": "iter/sec",
            "range": "stddev: 0.000002231134030556913",
            "extra": "mean: 1.3599082198970025 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 8293.480234407843,
            "unit": "iter/sec",
            "range": "stddev: 0.00009872836306516979",
            "extra": "mean: 120.57664234264618 usec\nrounds: 9579"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17066.47766761253,
            "unit": "iter/sec",
            "range": "stddev: 0.000046858966406577685",
            "extra": "mean: 58.59439888394338 usec\nrounds: 19532"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2878.64618622847,
            "unit": "iter/sec",
            "range": "stddev: 0.00009621488171758535",
            "extra": "mean: 347.3855192013628 usec\nrounds: 3255"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5421.659955911507,
            "unit": "iter/sec",
            "range": "stddev: 0.00007362593956357267",
            "extra": "mean: 184.44535587475383 usec\nrounds: 6196"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2297.99297184079,
            "unit": "iter/sec",
            "range": "stddev: 0.00020956935228057973",
            "extra": "mean: 435.1623404657141 usec\nrounds: 2664"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4135.832587719994,
            "unit": "iter/sec",
            "range": "stddev: 0.00010064824882094143",
            "extra": "mean: 241.78928396888548 usec\nrounds: 4747"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 718.6092623096646,
            "unit": "iter/sec",
            "range": "stddev: 0.00028144113959650005",
            "extra": "mean: 1.3915768310387822 msec\nrounds: 799"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1424.8439463977634,
            "unit": "iter/sec",
            "range": "stddev: 0.0001659566612339979",
            "extra": "mean: 701.8312444167393 usec\nrounds: 1612"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1102.4673362848662,
            "unit": "iter/sec",
            "range": "stddev: 0.001657618816866446",
            "extra": "mean: 907.0563517735008 usec\nrounds: 1663"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 762.8658152648176,
            "unit": "iter/sec",
            "range": "stddev: 0.002143264669255633",
            "extra": "mean: 1.310846521092133 msec\nrounds: 1209"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26831.728037840163,
            "unit": "iter/sec",
            "range": "stddev: 0.00002256269216390392",
            "extra": "mean: 37.26931036978771 usec\nrounds: 30396"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "3787ebf9c79e9a1105dd25b26988ca09c90861b9",
          "message": "Finish tests",
          "timestamp": "2022-06-13T13:12:12+08:00",
          "tree_id": "574f05530774f044c5cbbc1ade398e028a106ac4",
          "url": "https://github.com/dswij/pydantic-core/commit/3787ebf9c79e9a1105dd25b26988ca09c90861b9"
        },
        "date": 1655097336991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 54564.17990989568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033025836957804547",
            "extra": "mean: 18.32704169019576 usec\nrounds: 68961"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 33671.89725688177,
            "unit": "iter/sec",
            "range": "stddev: 0.00000495667775511983",
            "extra": "mean: 29.698356239656878 usec\nrounds: 42550"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 245820.85625949458,
            "unit": "iter/sec",
            "range": "stddev: 9.552282412583065e-7",
            "extra": "mean: 4.068003078405907 usec\nrounds: 123442"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1090230.4281566874,
            "unit": "iter/sec",
            "range": "stddev: 1.9946731728011346e-7",
            "extra": "mean: 917.2372868829834 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 900610.9349689035,
            "unit": "iter/sec",
            "range": "stddev: 2.3174361742775815e-7",
            "extra": "mean: 1.1103573820527177 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10219.56980620841,
            "unit": "iter/sec",
            "range": "stddev: 0.000011625005900824725",
            "extra": "mean: 97.85147701545107 usec\nrounds: 11834"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 19937.23181301088,
            "unit": "iter/sec",
            "range": "stddev: 0.000007000347940070273",
            "extra": "mean: 50.157414498606975 usec\nrounds: 25906"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3375.914238436011,
            "unit": "iter/sec",
            "range": "stddev: 0.000037264775946453644",
            "extra": "mean: 296.2160556730489 usec\nrounds: 4257"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6651.770376891203,
            "unit": "iter/sec",
            "range": "stddev: 0.00002180304667533385",
            "extra": "mean: 150.33591710773453 usec\nrounds: 8312"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2825.7326494694403,
            "unit": "iter/sec",
            "range": "stddev: 0.00004729655474957442",
            "extra": "mean: 353.89052116723076 usec\nrounds: 3496"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5264.884217836551,
            "unit": "iter/sec",
            "range": "stddev: 0.000026430933406624043",
            "extra": "mean: 189.9377001705311 usec\nrounds: 6447"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 924.827589684599,
            "unit": "iter/sec",
            "range": "stddev: 0.00013161810606563898",
            "extra": "mean: 1.081282620840753 msec\nrounds: 1142"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1770.3202647674266,
            "unit": "iter/sec",
            "range": "stddev: 0.00007758220837668318",
            "extra": "mean: 564.8695436084688 usec\nrounds: 2167"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1292.949225769802,
            "unit": "iter/sec",
            "range": "stddev: 0.001615331726977409",
            "extra": "mean: 773.4255762476793 usec\nrounds: 2164"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 894.9484010375892,
            "unit": "iter/sec",
            "range": "stddev: 0.0020767982637920845",
            "extra": "mean: 1.1173828556379515 msec\nrounds: 1614"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 31713.451654209948,
            "unit": "iter/sec",
            "range": "stddev: 0.000005486804276942151",
            "extra": "mean: 31.532360807129315 usec\nrounds: 38461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "distinct": true,
          "id": "6d1ad303b482c8620ae725c94688788e7aadce87",
          "message": "Remove config setting for `BytesValidator`",
          "timestamp": "2022-06-13T15:05:38+08:00",
          "tree_id": "7f2fb7727e40e5a898ca9e292241696d8444e052",
          "url": "https://github.com/dswij/pydantic-core/commit/6d1ad303b482c8620ae725c94688788e7aadce87"
        },
        "date": 1655104067358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 50737.29572263671,
            "unit": "iter/sec",
            "range": "stddev: 0.00003082260195835289",
            "extra": "mean: 19.709367355064707 usec\nrounds: 55249"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28806.1475002957,
            "unit": "iter/sec",
            "range": "stddev: 0.00003205349317616768",
            "extra": "mean: 34.71481217645417 usec\nrounds: 32259"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 217164.23559757057,
            "unit": "iter/sec",
            "range": "stddev: 0.000012711504248941534",
            "extra": "mean: 4.60480979866828 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1007554.1189183195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012289806483165575",
            "extra": "mean: 992.5025179528917 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 827252.8143385405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016031231471511212",
            "extra": "mean: 1.2088203057969331 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9139.508732891136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001033747968759147",
            "extra": "mean: 109.41507133761075 usec\nrounds: 10205"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 19249.646688257704,
            "unit": "iter/sec",
            "range": "stddev: 0.000034743481375733067",
            "extra": "mean: 51.94900541265522 usec\nrounds: 20877"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3182.3140967160225,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925614263777026",
            "extra": "mean: 314.23673767210676 usec\nrounds: 3488"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6000.734523360433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007196329287388435",
            "extra": "mean: 166.64626573748114 usec\nrounds: 6672"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2599.085820381264,
            "unit": "iter/sec",
            "range": "stddev: 0.00011204176175509663",
            "extra": "mean: 384.7506658526991 usec\nrounds: 2867"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4542.900524137368,
            "unit": "iter/sec",
            "range": "stddev: 0.00008410716188246514",
            "extra": "mean: 220.12368412796928 usec\nrounds: 5097"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 835.3372580585028,
            "unit": "iter/sec",
            "range": "stddev: 0.00023254875578070864",
            "extra": "mean: 1.1971212709034522 msec\nrounds: 897"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1531.9888692715656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666031740804146",
            "extra": "mean: 652.7462568807584 usec\nrounds: 1744"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1220.0991700344387,
            "unit": "iter/sec",
            "range": "stddev: 0.0015092617207054437",
            "extra": "mean: 819.6055079455335 usec\nrounds: 1762"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 848.069569182593,
            "unit": "iter/sec",
            "range": "stddev: 0.002005801048659976",
            "extra": "mean: 1.1791485466974652 msec\nrounds: 1317"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 29367.237314522186,
            "unit": "iter/sec",
            "range": "stddev: 0.000021763536795955445",
            "extra": "mean: 34.051551710160254 usec\nrounds: 32363"
          }
        ]
      }
    ]
  }
}